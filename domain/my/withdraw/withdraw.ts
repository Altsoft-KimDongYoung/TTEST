import { WITHDRAWAL_REASONS } from '@/constants/status';

/** @ResponseBody 회원탈퇴  */
export interface WithdrawalBody {
  withdrawalAgreement: boolean;
  withdrawalReason: keyof typeof WITHDRAWAL_REASONS;
  withdrawalOtherReason: string;
}
