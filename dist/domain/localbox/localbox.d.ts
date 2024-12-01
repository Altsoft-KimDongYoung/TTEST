import { AdministrativeDistrictPercentage, CommonResponse, ContentBadge, ContentButton, ContentRepresentFile, LocalboxCreatorType, Pagenation, PagingInfo } from '@/types/common';
import { ContentDisplayDeviceType, ContentsType, InsertBannerType } from '../contents';
export type ContentCardBadgeValue = '주민소식' | '광고';
export type ContentCardButtonValue = '광고 삽입가능' | '광고 해제' | '주민소식 삽입가능' | '주민소식 해제';
export interface VisitTown {
    visitTownId: number;
    visitTownName: string;
    visitTownLatitudeX: number;
    visitTownLongitudeY: number;
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
export type LocalboxContentType = 'ALL' | 'INTRO' | ContentsType;
/** @RequestBody 콘텐츠 포스팅 신청을 위해 보내야하는 값 */
export interface ContentPostingBody {
    contentId: number;
    postingContentId: number;
    requestDisplayPeriod: string;
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
export interface VisitTownResponse extends CommonResponse {
    result: VisitTown[];
}
/** @Response 로컬박스 상세조회 */
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
 * @Response
 * - 내 로컬박스 콘텐츠 목록 조회
 * - 타 로컬박스 콘텐츠 목록 조회
 * */
export interface LocalboxContentResponse extends PagingInfo {
    content: LocalboxContentDTO[];
}
/** @Response 내 로컬박스 기본 정보 조회 */
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
/** @Response 로컬박스 소개글 정보 */
export interface LocalboxIntroResponse {
    nickname: string;
    localboxWorkplaceContactNumber: string;
    localboxWorkplaceBusinessHours: LocalboxWorkplaceBusinessHours | null;
    localboxWorkplaceAddr: string;
    localboxAddressPointLongitudeX: number;
    localboxAddressPointLatitudeY: number;
    localboxSnsUrls: string[];
    localboxSummary: string;
    homepageUrl: string;
    serviceOptions: ServiceOptions;
    beopPercentage: AdministrativeDistrictPercentage[];
    contentHashTagElementDtos: ContentHashTagElementDto[];
}
/** @DTO 로컬박스 상단고정 콘텐츠 */
export type LocalboxTopPinnedContentDTO = Pick<LocalboxContentDTO, 'contentId' | 'contentTitle' | 'contentRepresentFileType' | 'contentRepresentFileUrl' | 'contentType'>;
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
/** @DTO 시간 범위를 나타내는 */
interface TimeRange {
    startTime: string;
    endTime: string;
}
/** @DTO 요일별 영업 시간 */
export interface DailyBusinessHours {
    openingHours: TimeRange;
    breakTime: TimeRange | null;
}
/** @DTO 주간 영업 스케줄 */
export interface WeeklyBusinessSchedule {
    monday: DailyBusinessHours | null;
    tuesday: DailyBusinessHours | null;
    wednesday: DailyBusinessHours | null;
    thursday: DailyBusinessHours | null;
    friday: DailyBusinessHours | null;
    saturday: DailyBusinessHours | null;
    sunday: DailyBusinessHours | null;
}
/** @DTO 로컬박스 영업 시간 */
export interface LocalboxWorkplaceBusinessHours {
    operationMode: 'daily' | 'weekly';
    weekHours: WeeklyBusinessSchedule;
}
/** @DTO 로컬박스 서비스 옵션 */
export interface ServiceOptions {
    groupAccess: boolean;
    wifi: boolean;
    reservation: boolean;
    takeout: boolean;
    delivery: boolean;
    babyChair: boolean;
    babyFacilities: boolean;
    noKidsZone: boolean;
    genderSeparatedRestrooms: boolean;
    petAllowed: boolean;
    wheelchairAccessible: boolean;
    wheelchairSeating: boolean;
    disabledParking: boolean;
    localCurrencyCard: boolean;
    localCurrencyPaper: boolean;
    localCurrencyMobile: boolean;
    zeroPay: boolean;
    valetParking: boolean;
    parking: boolean;
}
/** @DTO 해시태그 DTO */
export interface ContentHashTagElementDto {
    contentHashTagId: number;
    contentId: number;
    hashTagId: number;
    tagName: string;
    orderNum: number;
}
export {};
