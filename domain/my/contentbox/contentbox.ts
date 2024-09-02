import { Pagenation, PagingInfo } from '@/types/common';

import { ContentDisplayDeviceType, ContentsType } from '../../contents';

/** @RequestParams 승인된 사이니지 기기를 삭제하기 위한 파라미터 */
export interface ContentBoxListParams extends Pagenation {
  anyComplainYn?: boolean;
  findKeyword?: string;
  contentType: ContentsType;
  contentDisplayDeviceType: ContentDisplayDeviceType;
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
