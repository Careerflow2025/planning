import { createServiceRoleClient } from '@/lib/supabase/server';
import type { CreditTransactionType } from '@/types';

export async function getUserCredits(userId: string): Promise<number> {
  const supabase = await createServiceRoleClient();

  const { data } = await supabase
    .from('profiles')
    .select('credits_remaining')
    .eq('user_id', userId)
    .single();

  return data?.credits_remaining ?? 0;
}

export async function deductCredits(
  userId: string,
  amount: number,
  assessmentId: string
): Promise<boolean> {
  const supabase = await createServiceRoleClient();

  const currentCredits = await getUserCredits(userId);
  if (currentCredits < amount) return false;

  const { error } = await supabase.rpc('deduct_credits', {
    p_user_id: userId,
    p_amount: amount,
    p_assessment_id: assessmentId,
  });

  return !error;
}

export async function addCredits(
  userId: string,
  amount: number,
  type: CreditTransactionType,
  stripePaymentId?: string
): Promise<boolean> {
  const supabase = await createServiceRoleClient();

  const { error } = await supabase.rpc('add_credits', {
    p_user_id: userId,
    p_amount: amount,
    p_type: type,
    p_stripe_payment_id: stripePaymentId ?? null,
  });

  return !error;
}

export function getAssessmentCreditCost(
  aiDifficulty: string,
  assessmentCreditCost: number
): number {
  return assessmentCreditCost;
}
