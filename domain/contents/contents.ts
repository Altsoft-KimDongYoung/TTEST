import {
  CommonResponse,
  LocalboxCreatorType,
  Pagenation,
  PagingInfo,
} from '@/types/common';

import { LocalboxMyElement } from '../localbox';
import { DeviceRatio } from '../signages';
import { DisplayGpsSettingType } from './villages';

export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';

export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';

export type ContentTextType = '동네소식' | '주민소식' | ' 광고';

export type DisplayDeviceType = '메인' | '사이니지' | '메인사이니지';

export type ContentDisplayDeviceType = 'NONE' | 'MOBILE' | 'SIGNAGE' | 'MIXED';

export type ContentTempDisplayDeviceType = 'MOBILE' | 'SIGNAGE' | 'MIXED';

export const COMPLAIN_TYPE = [
  {
    label: '이미지, 사진, 콘텐츠 도용',
    value: 'STEAL_CONTENTS',
  },
  {
    label: '사행성 광고',
    value: 'GAMBLING_AD',
  },
  {
    label: '음란성 광고',
    value: 'OBSCENE_AD',
  },
  {
    label: '불법적인 내용',
    value: 'ILLEGAL_SUBSTANCE',
  },
  {
    label: '욕설, 비방',
    value: 'SWEAR_WORD',
  },
  {
    label: '기타',
    value: 'ET_CETERA',
  },
];

/** 콘텐츠 신고 타입 */
export type ComplainType =
  | 'ET_CETERA'
  | 'STEAL_CONTENT'
  | 'GAMBLING_AD'
  | 'OBSCENE_AD'
  | 'ILLEGAL_SUBSTANCE'
  | 'SWEAR_WORD'
  | string;

/** @DTO 해시태그 데이터 */
export interface ContentHashTag {
  contentHashTagId: number;
  contentId: number;
  hashTagId: number;
  tagName: string;
  orderNum: number;
}

/** @DTO 댓글 작성자 데이터 */
export interface CommentLocalboxDtoType {
  localboxId: number;
  localboxCreatorType: LocalboxCreatorType;
  localboxName: string;
  localboxProfileImgUrl: string;
  localboxBadgeName: string;
  localboxMyTownName: string;
  localboxSubscribeYn: boolean;
  townPointLongiX?: number; // 🔥 수정 필요
  townPointLatiY?: number; // 🔥 수정 필요
}

/** @DTO 서브 콘텐츠(광고,주민소식) 데이터 */
export interface PostingContent {
  contentId: number;
  contentType: InsertBannerType;
  contentTitle: string;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  mainDisplayCount: number;
  signageDisplayCount: number;
}

/** @DTO 콘텐츠 목록 */
export interface ContentListDto {
  contentId: number;
  contentLikeCount: number;
  contentReplyCount: number;
  contentLikeYn: boolean;
  contentNotLikeYn: boolean;
  contentBookmarkYn: boolean;
  contentType: string;
  contentTitle: string;
  contentBodyText: string;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  contentDisplayRateDong: string;
  contentHashTagElementDtos: ContentHashTag[];
  regDt: string;
  localboxElementDto: LocalboxMyElement;
}

/** @DTO 콘텐츠 노출영역 */
interface DisplayInfoDto {
  displayRadius: number;
  displayLongitude: number;
  displayLatitude: number;
}

/** @DTO 콘텐츠 상세 데이터 */
export interface ContentDetailDto {
  contentId: number;
  contentLikeCount: number;
  contentNotLikeCount: number;
  contentReplyCount: number;
  contentLikeYn: boolean;
  contentNotLikeYn: boolean;
  contentBookmarkYn: boolean;
  contentType: string;
  contentTitle: string;
  contentBody: string;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  contentDisplayRateDong?: string;
  contentHashTagElementDtos: ContentHashTag[];
  regDt: string;
  localboxElementDto: LocalboxMyElement;
  postingContentDto?: PostingContent;
  displayInfo: DisplayInfoDto;
}

/** @DTO 댓글 */
export interface Comment {
  contentId: number;
  contentReplyId: number;
  contentReplyLikeYn: boolean;
  contentReplyLikeCount: number;
  contentReplyRepl: string;
  regDt: string;
  localboxElementDto: CommentLocalboxDtoType;
}

/** @DTO 임시저장 상세 조회 시 타입 */
export interface ContentTempItem {
  contentTempId: number;
  contentType: ContentsType;
  displayDeviceType: ContentTempDisplayDeviceType;
  title: string;
  body: string;
  bodyText: string;
  representFileType: 'IMG_FILE';
  representFileUrl: string;
  displayGpsSetting?: DisplayGpsSettingType;
  hashTags: string[];
  shareOrganizationIds?: number[];
  summary: string;
  contentSignageRegDto?: {
    ratioType: DeviceRatio;
    titleDto: {
      text: string;
      fontSize: string;
      fontColor: string;
      horizontalAlign: string;
      verticalAlign: string;
    };
    summaryDto: {
      text: string;
      fontSize: string;
      fontColor: string;
      horizontalAlign: string;
      verticalAlign: string;
    };
  };
}

/** @DTO 임시저장 목록 조회 시 각 content 타입 */
export interface ContentTempContent {
  contentTempId: number;
  contentType: ContentsType;
  displayDeviceType: ContentTempDisplayDeviceType;
  contentTitle: string;
  regDt: string;
}

/** @DTO 배너 데이터 */
export interface Banner {
  id: number;
  title: string;
  explanation: string;
  url: string;
  displayYn: boolean;
  clickCount: number;
  createDt: string;
  updateDt: string;
  bannerFileUrl: string;
}

/** @RequestParams 콘텐츠 조회 */
export interface contentListParams {
  displayLongitude?: number;
  displayLatitude?: number;
  findKeyword?: string;
  page?: number;
  size?: number;
}

/** @RequestBody 배너 아이디 */
export interface BannerBody {
  id: number;
}

/** @RequestBody 좋아요,싫어요,구독,북마크 */
export interface SetYnBody {
  contentId: number;
  setYn: boolean;
}

// 🔥 로컬박스로 옮겨야 하나?
/** @RequestBody 로컬박스 구독 */
export interface SubscribeBody {
  targetLocalboxId: number;
  subscribeYn: boolean;
}

/** @RequestParams 콘텐츠 댓글 목록 조회 */
export interface ContentReplyListParams extends Pagenation {
  contentId: number;
}

/** @RequestBody 콘텐츠 댓글 등록 */
export interface ContentReplyBody {
  contentId: number;
  repl: string;
}

/** @RequestBody 콘텐츠 댓글 좋아요 */
export interface ContentReplyLikeBody {
  contentReplyId: number;
  setYn: boolean;
}

/** @RequestBody 콘텐츠 댓글 신고 */
export interface ComplainContentReplyBody {
  contentReplyId: number;
  complainType: ComplainType;
  explanation: string;
}

/** @RequestBody 콘텐츠 신고 */
export interface ComplainContentBody {
  contentId: number;
  complainType: ComplainType;
  explanation?: string;
}

/** @RequestParams 로컬박스의 콘텐츠 개수 조회 */
export interface ContentCountParams {
  contentType: ContentsType;
  deviceTypes: string;
}

/** @Response 목록 조회 응답 */
export interface ContentListResponse extends PagingInfo {
  content: ContentListDto[];
}

/** @Response 콘텐츠 등록 응답 */
export interface ContentRegisterResponse {
  id: number;
}

/** @Response 임시저장 목록 조회 응답 */
export interface ContentTempResponse extends PagingInfo {
  content: ContentTempContent[];
}

/** @Response 콘텐츠 댓글 조회 응답 */
export interface ContentCommentResponse extends PagingInfo {
  content: Comment[];
}

/** @Response 콘텐츠 개수 조회 응답 값 */
export interface ContentCountResponse extends CommonResponse {
  result: number;
}

/** @Response 콘텐츠 개수 조회 응답 값 */
export interface ContentCountResponse extends CommonResponse {
  result: number;
}
