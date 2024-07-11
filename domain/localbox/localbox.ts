import {
  CommonResponse,
  ContentButton,
  ContentRepresentFile,
  LocalboxCreatorType,
  PagingInfo,
} from '@/types/common';

import {
  ContentDisplayDeviceType,
  ContentsType,
  InsertBannerType,
} from '../contents';

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
// -------------------------------------------------------------
/** @COMMON 로컬박스 콘텐츠 타입 */
export type LocalboxContentType = 'ALL' | ContentsType;

/** @ResponseBody 로컬박스 상세조회 */
export interface LocalboxDetailResponse {
  localboxId: number;
  localboxCreatorType: LocalboxCreatorType;
  organizationId: number;
  nickname: string;
  localboxProfileImgUrl: string;
  localboxBadgeName: string;
  localboxMyTownName: string;
  localboxSubscribeYn: boolean;
  villageNewsSumCount: number;
  residentNewsSumCount: number;
  adSumCount: number;
  localboxSubscriptionSumCount: number;
  localboxSummary?: string;
  localboxWorkplaceAddr?: string;
  localboxWorkplaceContactNumber?: string;
  localboxWorkplaceBusinessHours?: string;
}

/**
 * @ResponseBody
 * - 내 로컬박스 콘텐츠 목록 조회
 * - 타 로컬박스 콘텐츠 목록 조회
 * */
export interface LocalboxContentResponse extends PagingInfo {
  content: LocalboxContentDTO[];
}

/** @RequestParams 타 로컬박스 콘텐츠 목록 조회 */
export interface LocalboxOtherContentParams {
  localboxId: number;
  contentType: ContentsType | null;
}

/** @RequestParams 내 로컬박스 콘텐츠 목록 조회 */
export interface LocalboxMyContentParams {
  contentType?: ContentsType | InsertBannerType | null;
  contentDisplayDeviceTypes?: string;
}

/** @DTO 로컬박스 상단고정 콘텐츠 */
export type LocalboxTopPinnedContentDTO = Pick<
  LocalboxContentDTO,
  | 'contentId'
  | 'contentTitle'
  | 'contentRepresentFileType'
  | 'contentRepresentFileUrl'
  | 'contentType'
>;

/** @DTO 로컬박스 콘텐츠 */
export interface LocalboxContentDTO {
  contentId: number;
  contentType: ContentsType;
  contentBadgeType: ContentButton;
  contentTopGroupYn: boolean;
  contentTitle: string;
  contentRepresentFileType: ContentRepresentFile;
  contentRepresentFileUrl: string;
  mainDisplayCount: number;
  signageDisplayCount: number;
  contentDisplayDeviceType: ContentDisplayDeviceType;
  createDt: string;
  updateDt: string;
}

/** @RequestParams 내 로컬박스 기본 정보 수정 */
export interface LocalboxInfoParams {
  nickname: string;
  localboxWorkplaceContactNumberDisplayYn: boolean;
  localboxWorkplaceAddrDisplayYn: boolean;
  localboxWorkplaceBusinessHoursDisplayYn: boolean;
  localboxWorkplaceBusinessHours: string;
  localboxSummaryDisplayYn: boolean;
  localboxSummary: string;
  profileImg: string;
}

/** @ResponseBody 내 로컬박스 기본 정보 조회 */
export interface LocalboxInfoResponse {
  localboxId: number;
  nickname: string;
  localboxProfileImgUrl: string;
  localboxSummaryDisplayYn: boolean;
  localboxSummary: string;
  localboxWorkplaceAddrDisplayYn: boolean;
  localboxWorkplaceAddr: string;
  localboxWorkplaceContactNumberDisplayYn: boolean;
  localboxWorkplaceBusinessHoursDisplayYn: boolean;
  localboxWorkplaceBusinessHours: string;
}
