import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { addCredits } from '@/lib/utils/credits';

// Credit amounts per price tier
const CREDIT_TIERS: Record<string, { credits: number; tier: string }> = {
  price_starter_monthly: { credits: 50, tier: 'starter' },
  price_starter_annual: { credits: 50, tier: 'starter' },
  price_professional_monthly: { credits: 200, tier: 'professional' },
  price_professional_annual: { credits: 200, tier: 'professional' },
  price_enterprise_monthly: { credits: 1000, tier: 'enterprise' },
  price_enterprise_annual: { credits: 1000, tier: 'enterprise' },
};

// One-off credit packs
const CREDIT_PACKS: Record<string, number> = {
  price_10_credits: 10,
  price_25_credits: 25,
  price_50_credits: 50,
  price_100_credits: 100,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
    }

    // Verify webhook signature using Stripe's recommended approach
    // Import Stripe dynamically to avoid issues if not installed
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    let event: import('stripe').Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      return NextResponse.json(
        { error: `Webhook signature verification failed` },
        { status: 400 }
      );
    }

    const supabase = await createServiceRoleClient();

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as import('stripe').Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const priceId = session.metadata?.price_id;

        if (!userId) {
          return NextResponse.json({ error: 'No user_id in session metadata' }, { status: 400 });
        }

        // Handle subscription checkout
        if (session.mode === 'subscription' && priceId) {
          const tierConfig = CREDIT_TIERS[priceId];
          if (tierConfig) {
            // Update subscription tier
            await supabase
              .from('profiles')
              .update({
                subscription_tier: tierConfig.tier,
              })
              .eq('id', userId);

            // Add initial credits
            await addCredits(userId, tierConfig.credits, 'purchase', session.payment_intent as string);
          }
        }

        // Handle one-off credit pack purchase
        if (session.mode === 'payment' && priceId) {
          const creditAmount = CREDIT_PACKS[priceId];
          if (creditAmount) {
            await addCredits(userId, creditAmount, 'purchase', session.payment_intent as string);
          }
        }

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as import('stripe').Stripe.Subscription;
        const userId = subscription.metadata?.user_id;

        if (!userId) break;

        const priceId = subscription.items.data[0]?.price?.id;
        if (!priceId) break;

        // Find matching tier from lookup_key or price ID
        const lookupKey = subscription.items.data[0]?.price?.lookup_key;
        const tierConfig = CREDIT_TIERS[lookupKey ?? ''] ?? CREDIT_TIERS[priceId];

        if (tierConfig) {
          await supabase
            .from('profiles')
            .update({
              subscription_tier: tierConfig.tier,
            })
            .eq('id', userId);

          // Add credits for the new billing period if subscription is active
          if (subscription.status === 'active') {
            await addCredits(userId, tierConfig.credits, 'purchase', subscription.latest_invoice as string);
          }
        }

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as import('stripe').Stripe.Subscription;
        const userId = subscription.metadata?.user_id;

        if (!userId) break;

        // Downgrade to free tier
        await supabase
          .from('profiles')
          .update({
            subscription_tier: 'free',
          })
          .eq('id', userId);

        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as unknown as Record<string, unknown>;
        const subscriptionId = invoice.subscription as string | null;
        const billingReason = invoice.billing_reason as string | null;

        if (!subscriptionId || !billingReason?.includes('recurring')) break;

        // Get subscription to find user and tier
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const userId = subscription.metadata?.user_id;

        if (!userId) break;

        const lookupKey = subscription.items.data[0]?.price?.lookup_key;
        const tierConfig = lookupKey ? CREDIT_TIERS[lookupKey] : null;

        if (tierConfig) {
          await addCredits(userId, tierConfig.credits, 'purchase', (invoice.payment_intent as string) ?? '');
        }

        break;
      }

      default:
        // Unhandled event type - acknowledge receipt
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
