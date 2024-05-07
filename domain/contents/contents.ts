import {
  CommonResponse,
  LocalboxCreatorType,
  PagingInfo,
} from '@/types/common';

import { LocalboxMyElement } from '../localbox';
import { DisplayGpsSettingType } from './villages';

export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';

export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';

export type ContentTextType = '동네소식' | '주민소식' | ' 광고';

export type DisplayDeviceType = '메인' | '사이니지' | '메인사이니지';

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

export type ComplainType =
  | 'ET_CETERA'
  | 'STEAL_CONTENT'
  | 'GAMBLING_AD'
  | 'OBSCENE_AD'
  | 'ILLEGAL_SUBSTANCE'
  | 'SWEAR_WORD'
  | string;

// 콘텐츠 목록 관련 객체 type 정의
export interface ContentHashTag {
  contentHashTagId: number;
  contentId: number;
  hashTagId: number;
  tagName: string;
  orderNum: number;
}

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

export interface PostingContent {
  contentId: number;
  contentType: 'AD' | 'RESIDENT_NEWS';
  contentTitle: string;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  mainDisplayCount: number;
  signageDisplayCount: number;
}

// 콘텐츠 목록
export interface ContentMainVillage {
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

interface DisplayInfoDto {
  displayRadius: number;
  displayLongitude: number;
  displayLatitude: number;
}

// 콘텐츠 상세
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
  contentDisplayRateDong?: string; // 🔥 수정 필요
  contentHashTagElementDtos: ContentHashTag[];
  regDt: string;
  localboxElementDto: LocalboxMyElement;
  postingContentDto?: PostingContent;
  displayInfo: DisplayInfoDto;
}

// 댓글
export interface Comment {
  contentId: number;
  contentReplyId: number;
  contentReplyLikeYn: boolean;
  contentReplyLikeCount: number;
  contentReplyRepl: string;
  regDt: string;
  localboxElementDto: CommentLocalboxDtoType;
}

// 콘텐츠 등록

// 임시저장
export interface GetTemporaryContentItemType {
  title: string;
  contentType: ContentTextType;
  displayDeviceType: DisplayDeviceType;
  saveDate: number;
}

// 임시저장
export type ContentTempType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';
export type ContentTempDisplayDeviceType = 'MOBILE' | 'SIGNAGE' | 'MIXED';
export interface ContentTempItem {
  contentTempId: number;
  contentType: ContentTempType;
  displayDeviceType: ContentTempDisplayDeviceType;
  title: string;
  body: string;
  bodyText: string;
  representFileType: 'IMG_FILE';
  representFileUrl: string;
  displayGpsSetting: DisplayGpsSettingType;
  hashTags: string[];
}

export interface ContentTempContent {
  contentTempId: number;
  contentType: ContentTempType;
  displayDeviceType: ContentTempDisplayDeviceType;
  contentTitle: string;
  regDt: string;
}

// 배너 리스트
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

/** Params & Body */

export interface contentListParams {
  displayLongitude?: number;
  displayLatitude?: number;
  findKeyword?: string;
  page?: number;
  size?: number;
}

export interface CommentReplyParams {
  contentId: number;
  page?: number;
  size?: number;
}

export interface BannerBody {
  id: number;
}

export interface SetYnBody {
  contentId: number;
  setYn: boolean;
}

export interface SubscribeBody {
  targetLocalboxId: number;
  subscribeYn: boolean;
}

export interface ContentReplyListParams {
  contentId: number;
  page?: number;
  size?: number;
}

export interface ContentReplyBody {
  contentId: number;
  repl: string;
}

export interface ContentReplyLikeBody {
  contentReplyId: number;
  setYn: boolean;
}

export interface ComplainContentReplyBody {
  contentReplyId: number;
  complainType: ComplainType;
  explanation: string;
}

export interface ComplainContentBody {
  contentId: number;
  complainType: ComplainType;
  explanation?: string;
}

/** Response */
export interface ContentMainVillageResponse extends CommonResponse {
  result: {
    content: ContentMainVillage[];
  } & PagingInfo;
}

export interface ContentLikeResponse extends CommonResponse {
  result: boolean;
}

export interface ContentDisLikeResponse extends CommonResponse {
  result: boolean;
}

export interface ContentBookmarkResponse extends CommonResponse {
  result: boolean;
}

export interface ContentReplyResponse extends CommonResponse {
  result: boolean;
}

export interface BannerResponse extends CommonResponse {
  result: Banner[];
}

/**params */

export interface ContentTempParams {
  page?: number;
  size?: number;
}

export interface ContentTempItemParams {
  contentTempId: number;
}

/**params */

export interface ContentTempParams {
  page?: number;
  size?: number;
}

export interface ContentTempItemParams {
  contentTempId: number;
}

/**params */

export interface ContentTempParams {
  page?: number;
  size?: number;
}

export interface ContentTempItemParams {
  contentTempId: number;
}

export interface ContentRegisterResponse extends CommonResponse {
  result: string;
}

/** @Response 동네소식 등록 */
export interface ContentVillageNewsResponse extends CommonResponse {
  result: { id: number };
}

export interface LocalBoxMyTownResponse extends CommonResponse {
  result: string;
}

export interface ContentTempResponse extends CommonResponse {
  result: {
    content: ContentTempContent[];
  } & PagingInfo;
}

export interface ContentTempItemResponse extends CommonResponse {
  result: ContentTempItem;
}

export interface ContentTempItemDeleteResponse extends CommonResponse {
  result: boolean;
}

/** 콘텐츠 상세 조회 response */
export interface ContentDetailResponse extends CommonResponse {
  result: ContentDetailDto;
}
export interface ContentCommentResponse extends CommonResponse {
  result: {
    content: Comment[];
  } & PagingInfo;
}

export interface ContentReplyRegisterResponse extends CommonResponse {
  result: boolean;
}

export interface ContentReplyDeleteResponse extends CommonResponse {
  result: string;
}

export interface ContentReplyLikeResponse extends CommonResponse {
  result: boolean;
}

export interface ContentDeleteResponse extends CommonResponse {
  result: boolean;
}

export interface ComplainContentReplyResponse extends CommonResponse {
  result: boolean;
}

export interface ComplainContentResponse extends CommonResponse {
  result: boolean;
}
