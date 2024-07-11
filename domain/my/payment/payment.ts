import { Pagenation, PagingInfo } from '@/types/common';

/** @RequestBody 카드 정보 등록 */
export interface PaymentInfoBody {
  cardOwnerName: string;
  cardNumber: string;
  cardCompany: string;
  cardValidDt: string;
}

/** @Response 결제 내역 목록 */
export interface PaymentHistoryResponse extends PagingInfo {
  content: ReceiptInfo[];
}

/** @DTO 등록된 카드 정보 */
export interface CardInfo {
  id: number;
  cardOwnerName: string;
  cardNumber: string;
  cardCompany: string;
  cardValidDt: string;
}

/** @DTO 결제 내역 졍보 */
export interface ReceiptInfo {
  paymentInfoId: number;
  transactionId: string;
  itemName: string;
  serviceStartDt: string;
  serviceEndDt: string;
  approveDt: string;
  signageGroupName: string;
  cardCompany: string;
  cardNumber: string;
  paymentAmount: number;
}
