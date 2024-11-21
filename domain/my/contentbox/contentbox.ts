import { ContentBadge, Pagenation, PagingInfo } from '@/types/common';

import { ContentsType } from '../../contents';

/** @RequestParams 콘텐츠 보관함 목록 요청을 위한 파라미터 */
export interface ContentBoxListParams extends Pagenation {
  anyComplainYn?: boolean;
  findKeyword?: string;
  contentType: ContentsType | null;
}

export interface ContentBoxListResponse extends PagingInfo {
  content: ContentBoxItemDto[];
}

/** @DTO 콘텐츠 보관함 목록 아이템 */
export interface ContentBoxItemDto {
  contentId: number;
  contentTitle: string;
  contentRepresentFileType: 'IMG_FILE' | 'MOV_FILE' | 'PDF_FILE';
  contentRepresentFileUrl: string;
  contentType: ContentsType;
  contentBadgeType: ContentBadge;
  complainYn: boolean;
  localityComplainYn: boolean;
  complainStatus: ComplainStatus;
  localityComplainStatus: LocalityComplainStatus;
  regDt: string;
}

/** @TYPE   */

export type LocalityComplainStatus =
  | 'COMPLAIN_ACCEPT'
  | 'CONTENT_CLEAR'
  | 'CONTENT_BLIND'
  | 'CONTENT_BLIND_REQ_TO_CANCEL'
  | 'CONTENT_REJECT'
  | 'CONTENT_REJECT_REQ_TO_CANCEL'
  | 'CONTENT_BLIND_CANCELED';

export type ComplainStatus = 'COMPLAIN_ACCEPT' | 'CONTENT_CLEAR' | 'CONTENT_BLIND';
