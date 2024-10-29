import {
  CommonResponse,
  ContentBadge,
  ContentButton,
  ContentRepresentFile,
  LocalboxCreatorType,
  Pagenation,
  PagingInfo,
} from '@/types/common';

import { ContentDisplayDeviceType, ContentsType, InsertBannerType } from '../contents';

export type ContentCardBadgeValue = '주민소식' | '광고';

export type ContentCardButtonValue =
  | '광고 삽입가능'
  | '광고 해제'
  | '주민소식 삽입가능'
  | '주민소식 해제';

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

/** @COMMON 로컬박스 콘텐츠 타입 */
export type LocalboxContentType = 'ALL' | ContentsType;

/** @ResponseBody 로컬박스 상세조회 */
export interface LocalboxDetailResponse {
  localboxId: number;
  localboxCreatorType: LocalboxCreatorType;
  organizationId: number;
  nickname: string;
  localboxProfileImgUrl: string;
  localboxBadgeName: string /** ❌ 제거 예정 */;
  localboxMyTownName: string;
  localboxSubscribeYn: boolean /** ❌ 제거 예정 */;
  villageNewsSumCount: number;
  residentNewsSumCount: number;
  adSumCount: number;
  shortFormSumCount: number;
  followingCount: number;
  followerCount: number;
  localboxFollowedByMeYn: boolean;
  localboxFollowingMeYn: boolean;
  localboxSubscriptionSumCount: number /** ❌ 제거 예정 */;
  localboxSummary?: string;
  localboxWorkplaceAddr?: string /** ❌ 제거 예정 */;
  localboxWorkplaceContactNumber?: string /** ❌ 제거 예정 */;
  localboxWorkplaceBusinessHours?: string /** ❌ 제거 예정 */;
  membershipStatus: 'PROVISIONAL' | 'REGULAR';
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
export interface LocalboxOtherContentParams extends Pagenation {
  localboxId: number;
  contentType: ContentsType | null;
}

/** @RequestParams 내 로컬박스 콘텐츠 목록 조회 */
export interface LocalboxMyContentParams extends Pagenation {
  contentType?: ContentsType | null;
  contentDisplayDeviceTypes?: string;
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

/** @RequestParams 로컬박스에서 콘텐츠 목록 조회 시 보내야 하는 params */
export interface LocalboxContentParams extends Pagenation {
  contentType: ContentsType | InsertBannerType | null;
  contentDisplayDeviceTypes: string;
}

// DTO
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
  contentBadgeType: ContentBadge;
  contentButtonType: ContentButton;
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

/** @RequestBody 콘텐츠 포스팅 신청을 위해 보내야하는 값 */
export interface ContentPostingBody {
  contentId: number;
  postingContentId: number;
  requestDisplayPeriod: string;
}
