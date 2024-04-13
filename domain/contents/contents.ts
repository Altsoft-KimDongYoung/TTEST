import { CommonResponse, PagingInfo } from '@/types/common';

import { LocalboxMyElement } from '../localbox';

export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';

export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';

export type CreatorType =
  | 'LOCALBOX_MEMBER'
  | 'LOCALBOX_BUSINESS'
  | 'LOCALBOX_GVMT'
  | 'LOCALBOX_APARTMENT'
  | 'LOCALBOX_LOCAL_NEWSPAPER';

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
  localboxCreatorType: CreatorType;
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
export type ContentTextType = '동네소식' | '주민소식' | ' 광고';

export type DisplayDeviceType = '메인' | '사이니지' | '메인사이니지';

export interface GetTemporaryContentItemType {
  title: string;
  contentType: ContentTextType;
  displayDeviceType: DisplayDeviceType;
  saveDate: number;
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
