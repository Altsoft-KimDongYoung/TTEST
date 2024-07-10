import {
  NOTICE_MESSAGE_TYPE,
  NOTICE_MESSAGE_TYPE_LABEL,
  NOTIFICATION_BADGE_TYPE,
  NOTIFICATION_ICON_TYPE,
  NOTIFICATION_MESSAGE_TYPE,
} from '@/constants/news';
import { LocalboxCreatorType, PagingInfo, ValueOf } from '@/types/common';
import type { ContentsType } from '@/types/domain';

export type NotificationMessageType = ValueOf<typeof NOTIFICATION_MESSAGE_TYPE>;
export type NotificationBadgeType = ValueOf<typeof NOTIFICATION_BADGE_TYPE>;
export type NotificationIconType = ValueOf<typeof NOTIFICATION_ICON_TYPE>;
export type NoticeMessageType = ValueOf<typeof NOTICE_MESSAGE_TYPE>;
export type NoticeMessageTypeLabel = ValueOf<typeof NOTICE_MESSAGE_TYPE_LABEL>;

export type NewsTabs = 'notification' | 'notice' | 'bookmark' | 'subscription';

/** @RequestParams 알림 상세 조회 */
export interface NotificationDetailParams {
  notificationId: number;
}

/** @RequestParams 공지사항 상세 조회 */
export interface NoticeDetailParams {
  noticeId: number;
}

/**
 * @RequestBody
 * 알림 조회
 * 공지사항 조회
 * 내 북마크 조회
 * 내가 구독중인 로컬박스 조회
 * */
export interface NewsCommonResponse<
  T =
    | NotificationContentDTO[]
    | NoticeContentDTO[]
    | BookmarkContentDTO[]
    | SubscriptionContentDTO[]
> extends PagingInfo {
  content: T;
}

/** @ResponseBody 공지사항 상세 조회 */
export interface NoticeDetailResponse {
  id: number;
  adminUserId: number;
  noticeType: NoticeMessageType;
  title: string;
  body: string;
  createDt: string;
  updateDt: string;
}

/** @DTO 알림 목록 조회 content */
export interface NotificationContentDTO {
  id: number;
  refId: number;
  badgeType?: NotificationBadgeType;
  iconType: NotificationIconType;
  notificationType: NotificationMessageType;
  readYn: boolean;
  canClickYn: boolean;
  explanation: string;
  toLocalboxId: number;
  toLocalboxName: string;
  regDt: string;
}

/** @DTO 공지사항 목록 조회 content */
export interface NoticeContentDTO {
  noticeId: number;
  noticeType: NoticeMessageType;
  title: string;
  readYn?: boolean;
  createDt: string;
  updateDt: string;
}

/** @DTO 북마크 목록 조회 content */
export interface BookmarkContentDTO {
  contentRepresentFileUrl: string;
  contentBookmarkId: number;
  contentId: number;
  contentType: ContentsType;
  contentTitle: string;
  createDt: string;
  updateDt: string;
}

/** @DTO 내가 구독중인 로컬박스 목록 조회 content */
export interface SubscriptionContentDTO {
  localboxId: number;
  localboxCreatorType: LocalboxCreatorType;
  nickname: string;
  localboxProfileImgUrl?: string;
  localboxMyTownName?: string;
  organizationName?: string;
  businessName?: string;
}
