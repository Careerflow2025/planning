export * from './assessment';
export * from './project';
export * from './knowledge';

export interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  role: 'individual' | 'professional' | 'admin';
  subscription_tier: 'free' | 'starter' | 'professional' | 'enterprise';
  credits_remaining: number;
  created_at: string;
}

export type CreditTransactionType = 'purchase' | 'assessment' | 'refund' | 'bonus';

export interface CreditTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: CreditTransactionType;
  assessment_id: string | null;
  stripe_payment_id: string | null;
  created_at: string;
}
