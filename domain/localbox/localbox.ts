import { CommonResponse } from '@/types/common';

import { ContentsType } from '../contents';

export interface LocalboxMyResponse {
  message: string;
  result: LocalboxMy;
}

// DTO
export interface ContentCardType {
  isTopFixed?: boolean;
  id: number;
  thumbnail: string;
  displaySignageCount?: number;
  displayMainCount?: number;
  preview: string;
  contentsType: ContentsType;
  badge?: ContentCardBadgeKey;
  button?: ContentCardButtonKey;
}

export interface LocalboxMy {
  localboxId: number;
  localboxName: string;
  localboxProfileImgUrl: string;
  localboxSummaryDisplayYn: boolean;
  localboxSummary: string;
  localboxWorkplaceAddrDisplayYn: boolean;
  localboxWorkplaceAddr: string;
  localboxWorkplaceContactNumberDisplayYn: boolean;
  localboxWorkplaceBusinessHoursDisplayYn: boolean;
  localboxMyTownName: string;
  localboxWorkplaceBusinessHours: boolean;
}

// DataType
export type ContentCardBadgeKey =
  | 'BADGE_RESIDENT'
  | 'BADGE_AD'
  | 'BADGE_NOT_LOCAL'
  | 'BADGE_REJECT'
  | 'BADGE_JUDGE';

export type ContentCardBadgeValue =
  | '주민소식'
  | '광고'
  | '심사중'
  | '우리동네 소식이 아니에요'
  | '반려';

export type ContentCardButtonKey =
  | 'BUTTON_AD_INSERT'
  | 'BUTTON_AD_CLEAR'
  | 'BUTTON_RESIDENT_INSERT'
  | 'BUTTON_RESIDENT_CLEAR'
  | 'BUTTON_REJECT_CONFIRM';

export type ContentCardButtonValue =
  | '광고 삽입가능'
  | '광고 해제'
  | '주민소식 삽입가능'
  | '주민소식 해제'
  | '반려사유 확인';

export interface VisitTown {
  visitTownId: number;
  visitTownName: string;
  visitTownLatitudeX: number;
  visitTownLongitudeY: number;
}
export interface VisitTownResponse extends CommonResponse {
  result: VisitTown[];
}

export interface LocalboxMyElement {
  localboxId: number;
  localboxName: string;
  localboxProfileImgUrl: string;
  localboxBadgeName: string;
  localboxMyTownName: string;
  localboxSubscribeYn: boolean;
}
