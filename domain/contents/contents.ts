import {
  CommonResponse,
  LocalboxCreatorType,
  PagingInfo,
} from '@/types/common';

import { LocalboxMyElement } from '../localbox';
import { DisplayGpsSettingType } from './villages';

export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';

export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';

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
  localboxBadgeName?: string;
  localboxMyTownName: string;
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
  contentBodyText: string;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  contentDisplayRateDong: string;
  contentHashTagElementDtos: ContentHashTag[];
  regDt: string;
  localboxElementDto: LocalboxMyElement;
}

// 댓글
export interface Comment {
  contentsId: number;
  contentsReplyId: number;
  contentReplyLikeYn: boolean;
  contentReplyLikeCount: number;
  contentReplyRepl: string;
  regDt: string;
  localboxElementDto: CommentLocalboxDtoType;
}

// 콘텐츠 등록

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
  description: string;
  url: string;
  displayYn: boolean;
  clickCount: number;
  createDt: string;
  updateDt: string;
  bannerImageUrl: string;
}
/** Params & Body */

export interface contentListParams {
  displayLongitude?: number;
  displayLatitude?: number;
  findKeyword?: string;
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

export interface ContentReplyBody {
  contentId: number;
  repl: string;
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

/* response */
export interface ContentRegisterResponse extends CommonResponse {
  result: string;
}

export interface ContentVillageNewsResponse extends CommonResponse {
  result: boolean;
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
