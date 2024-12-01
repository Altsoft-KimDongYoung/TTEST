import type { Pageable, Sort } from '@/types/common';
/** @RequestParams PinCode SMS, Email 전송 */
export interface SendPinCodeParams {
    userName: string;
    mobile: string;
    email: string;
}
/** @RequestParams PinCode SMS, Email 인증 */
export interface ConfirmPinCodeParams {
    mobile: string;
    email: string;
    pinCode: string;
}
/** @RequestParams 아이디 중복 체크 */
export interface UserCheckDuplicateLoginIdParams {
    loginId: string;
}
/** @RequestParams 부모 행정기관 조회(By 좌표) */
export interface OrganizationParentHierarchyListParams {
    latiY: string;
    longiX: string;
}
/** @RequestParams 기관 검색 조회 */
export interface OrganizationParams {
    organizationName: string;
    page?: string;
    size?: string;
}
/** @Response 기관 검색 조회 */
export interface OrganizationResponse<T = ApartmentContent | GvmtContent> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    number: number;
    size: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
/** @Response 부모 행정기관 조회(By 좌표) */
export type OrganizationParentHierarchyListResponse = ParentHierarchy[];
/** @DTO @OrganizationResponse */
export interface OrganizationContent {
    id: number;
    parentId: number;
    organizationType: string;
    organizationDepth: number;
    organizationName: string;
    existManager: boolean;
    organizationBaseAddr: string;
    organizationAddrPointX: number;
    organizationAddrPointY: number;
    createDt: string;
    updateDt: string;
}
/** @DTO @OrganizationResponse */
export interface ApartmentContent extends OrganizationContent {
}
/** @DTO @OrganizationResponse */
export interface GvmtContent extends OrganizationContent {
    organizationDetailAddr: string;
    organizationAddrAreaName: string;
    organizationAddrAreaFullName: string;
}
/** @DTO @OrganizationParentHierarchyListResponse */
export interface ParentHierarchy {
    id: number;
    parentId: number;
    organizationType: string;
    organizationDepth: number;
    organizationName: string;
    organizationBaseAddr: string;
    organizationDetailAddr: string;
    organizationAddrPointX: number;
    organizationAddrPointY: number;
    organizationAddrAreaName: string;
    organizationAddrAreaFullName: string;
    createDt: string;
    updateDt: string;
}
/** @RequestParams 사업자 유효성 체크 (기업, 지역신문사 회원 가입시 입력한 사업장의 유효성 체크) */
export interface CheckBusinessParams {
    businessName: string;
    ownerName: string;
    businessNumber: string;
    openDt: string;
}
/** @ResponseBody 사업자 유효성 체크 (기업, 지역신문사 회원 가입시 입력한 사업장의 유효성 체크) */
export interface CheckBusinessResponse {
    businessName: string;
    ownerName: string;
    businessNumber: string;
    openDt: string;
    status: string;
    statusMsg: string;
}
/** @RequestParams 특정 기관 관리자 존재 여부 체크 (특정 기관 관리자(회원)가 이미 존재하는 지를 확인하는 API) */
export interface CheckOrganizationManagerParams {
    organizationId: string;
}
/** @ResponseBody 특정 기관 관리자 존재 여부 체크 (특정 기관 관리자(회원)가 이미 존재하는 지를 확인하는 API) */
export interface CheckOrganizationManagerResponse {
    exist: boolean;
}
