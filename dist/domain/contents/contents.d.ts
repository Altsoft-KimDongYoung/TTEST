import { AdministrativeDistrictPercentage, CommonResponse, LocalboxCreatorType, NullableDeviceRatio, Pagenation, PagingInfo } from '@/types/common';
import { LocalboxMyElement } from '../localbox';
import { DisplayGpsSettingType } from './villages';
export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';
export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';
export type ContentTextType = '동네소식' | '주민소식' | ' 광고';
export type DisplayDeviceType = '메인' | '사이니지' | '메인사이니지';
export type ContentDisplayDeviceType = 'NONE' | 'MOBILE' | 'SIGNAGE' | 'MIXED';
export type ContentTempDisplayDeviceType = 'MOBILE' | 'SIGNAGE' | 'MIXED';
export type ResizeMode = 'cover' | 'contain' | 'none';
export declare const COMPLAIN_TYPE: {
    label: string;
    value: string;
}[];
/** 콘텐츠 신고 타입 */
export type ComplainType = 'ET_CETERA' | 'STEAL_CONTENT' | 'GAMBLING_AD' | 'OBSCENE_AD' | 'ILLEGAL_SUBSTANCE' | 'SWEAR_WORD' | string;
export type ContentReasonType = 'COMPLAINED_CONTENT' | 'CURRENT_PLAYING_SIGNAGE_CONTENT' | 'POSTED_CONTENT' | 'LOCALITY_COMPLAINED_CONTENT' | 'DEFAULT_SIGNAGE_PROJECT' | 'NONE';
export type DetailType = 'CONTENT' | 'COMMENT';
export type ContentRatioType = 'HORIZONTAL' | 'VERTICAL';
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
    townPointLongiX?: number;
    townPointLatiY?: number;
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
/** @DTO 사이니지 콘텐츠 데이터 */
export interface ContentSignageDto {
    ratioType: NullableDeviceRatio;
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
}
/** @DTO 사이니지 콘텐츠 상세 데이터 dto */
export interface ContentSignageDetailDto extends ContentSignageDto {
    contentSignageId: number;
    originalRepresentFileName: string;
    originalRepresentFileUrl: string;
}
/** @DTO 콘텐츠 목록 */
export interface ContentListDto {
    contentId: number;
    contentLikeCount: number;
    contentReplyCount: number;
    contentLikeYn: boolean;
    contentNotLikeYn: boolean;
    contentBookmarkYn: boolean;
    contentType: ContentsType;
    contentTitle: string;
    contentBodyText: string;
    contentRepresentFileType: string;
    contentRepresentFileUrl: string;
    contentDisplayRateDong: string;
    contentHashTagElementDtos: ContentHashTag[];
    regDt: string;
    localboxElementDto: LocalboxMyElement;
    viewerData: string[];
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
    contentLikeYn?: boolean;
    contentNotLikeYn?: boolean;
    contentBookmarkYn: boolean;
    contentType: string;
    displayDeviceType: ContentTempDisplayDeviceType;
    contentTitle: string;
    contentBody: string;
    contentRepresentFileType: string;
    contentRepresentFileUrl: string;
    contentDisplayRateDong?: string;
    contentHashTagElementDtos?: ContentHashTag[];
    regDt: string;
    localboxElementDto: LocalboxMyElement;
    postingContentDto?: PostingContent;
    contentSignageDto?: ContentSignageDetailDto;
    shareOrganizationIds?: number[];
    displayInfo?: DisplayInfoDto;
    isLocalityComplained: boolean;
    isLocalityDoubleCompained: boolean;
    isComplained: boolean;
    complainType?: ComplainType;
    complainReason?: string;
    displayYn: boolean;
    isPinnedToTopGroup: boolean;
    contentLocalityDtos?: AdministrativeDistrictPercentage[];
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
    contentSignageRegDto?: ContentSignageDto;
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
/** @DTO 수정&삭제 가능 DTO */
export interface CanDto {
    can: boolean;
    reasonType: ContentReasonType;
}
/** @RequestParams 콘텐츠 조회 */
export interface ContentListParams extends Pagenation {
    displayLongitude?: number;
    displayLatitude?: number;
    findKeyword?: string;
}
/** @RequestBody 배너 아이디 */
export interface BannerBody {
    id: number;
}
/** @RequestBody 좋아요, 싫어요, 구독, 북마크, 노출설정 및 해제 */
export interface SetYnBody {
    contentId: number;
    setYn: boolean;
}
/** ❌ 제거 예정 */
/** @RequestBody 로컬박스 구독 */
export interface SubscribeBody {
    targetLocalboxId: number;
    subscribeYn: boolean;
}
/** @RequestParams 콘텐츠 댓글 목록 조회 */
export interface ContentReplyListParams extends Pagenation {
    contentId: number;
    sort?: string;
    path?: DetailType;
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
/** @RequestParams 콘텐츠 댓글 수정 */
export interface ContentReplyEditBody {
    contentId: number;
    contentReplyId: number;
    repl: string;
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
    totalElements: number;
}
/** @Response 콘텐츠 개수 조회 응답 값 */
export interface ContentCountResponse extends CommonResponse {
    result: number;
}
/** @Response 콘텐츠 개수 조회 응답 값 */
export interface ContentCountResponse extends CommonResponse {
    result: number;
}
/** @TYPE 이미지 정보 */
export interface ImageInfo {
    imageUrl: string;
    ratio: number;
    difference: number;
}
/** @Response 콘텐츠 수정&삭제 가능 여부 조회 응답 값 */
export interface ContentUpdateableAndDeletableResponse {
    updatableInfoDto: CanDto;
    deletableInfoDto: CanDto;
}
/** @RequestBody 로컬박스 팔로우 */
export interface LocalboxFollowBody {
    targetLocalboxId: number;
    followYn: boolean;
}
export {};
