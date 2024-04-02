import { ContentsType } from '../contents';

// Request

// Response

export interface LocalboxMyElementResponse {
  message: string;
  result: LocalboxMyElement;
}

// DTO
export interface ContentCardType {
  isTopFixed: boolean;
  id: number;
  thumbnail: string;
  displaySignageCount: number;
  displayMainCount: number;
  preview: string;
  contentsType: ContentsType;
  badge?: ContentCardBadgeKey;
  button?: ContentCardButtonKey;
}

export interface LocalboxMyElement {
  localboxId: number;
  localboxName: string;
  localboxProfileImgUrl: string;
  localboxBadgeName: string;
  localboxMyTownName: string;
  localboxSubscribeYn: boolean;
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