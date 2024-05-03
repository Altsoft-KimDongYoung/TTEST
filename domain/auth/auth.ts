import type { UserType, UserTypeLabel } from '@/types/common';

/** @Auth 회원유형 아이템 */
export interface SelectUserTypeItem {
  key: UserType;
  label: UserTypeLabel;
  icon: React.ReactNode;
}

/** @Auth 회원유형 리스트 */
export type SelectUserTypeList = SelectUserTypeItem[];

/** @Auth 이용약관 종류 */
export type Terms = 'service' | 'privacy' | 'marketing';

/** @AUTH 일반 회원 폼 */
export interface SignupMemberForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  mobile: string;
  name: string;
  nickname: string;
  townPointLongiX: string;
  townPointLatiY: string;
  profileImg: File | null;
}

/** @Auth 기업회원 폼 */
export interface SignupBusinessForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  mobile: string;
  name: string;
  nickname: string;
  email: string;
  businessName: string;
  businessNumber: string;
  ownerName: string;
  businessContactNumber: string;
  serviceName: string;
  homepageUrl: string;
  openDt: string;
  licenseImg: File | null;
  baseAddr: string;
  detailAddr: string;
  profileImg: File | null;
  businessAddressPointLongiX: string;
  businessAddressPointLatiY: string;
}

/** @Auth 아파트회원 폼 */
export interface SignupApartmentForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname: string;
  mobile: string;
  email: string;
  organizationId: string;
  contactNumber: string;
  ownerName: string;
  organizationName: string;
  profileImg: File | null;
  employmentFile: File | null;
}

/** @Auth 관공서회원 폼 */
export interface SignupGvmtForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname: string;
  mobile: string;
  email: string;
  organizationName: string;
  organizationId: string;
  contactNumber: string;
  contactName: string;
  profileImg: File | null;
  employmentFile: File | null;
}

/** @Auth 지역 신문사회원 폼 */
export interface SignupLocalNewspaperForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname: string;
  mobile: string;
  email: string;
  organizationName: string;
  organizationId: string;
  businessName: string;
  businessNumber: string;
  openDt: string;
  ownerName: string;
  businessContactNumber: string;
  newspaperName: string;
  newspaperNumber: string;
  baseAddr: string;
  detailAddr: string;
  profileImg: File | null;
  licenseImg: File | null;
  employmentFile: File | null;
}

/** @RequestParams PinCode SMS, Email 전송 */
export interface UserSendJoinParams {
  userName: string;
  mobile: string;
  email: string;
}

/** @RequestParams PinCode SMS, Email 인증 */
export interface UserJoinConfirmParams {
  mobile: string;
  email: string;
  pinCode: string;
}

/** @RequestParams 내 동네 영역 조회(Point)*/
export interface AreaPointMyTownParams {
  latiY: string | number;
  longiX: string | number;
}

/** @RequestParams 내 동네 영역 조회(OrganizationId)*/
export interface OrganizationMyTownParams {
  ohId: string | number;
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

/** @Response 내 동네 영역 조회 */
export interface AreaPointMyTownResponse {
  apiId: number;
  apiType: string;
  apiDepth: number;
  areaName: string;
  areaFullName: string;
  multiPolygonStr: any;
}

/** @RequestParams 기관 검색 조회 */
export interface OrganizationParams {
  organizationName: string;
  page?: string;
  size?: string;
}

/** @Response 기관 검색 조회 */
export interface OrganizationResponse<T = ApartmentContent | GvmtContent> {
  result: {
    content: T[];
    pageable: ApartmentPageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    number: number;
    size: number;
    sort: ApartmentSort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
  message: string;
}

/** @Response 부모 행정기관 조회(By 좌표) */
export type OrganizationParentHierarchyListResponse = ParentHierarchy[];

/** @Response PinCode SMS 인증, E-Mail 인증(아이디 찾기용) */
export interface FindLoginIdResponse {
  loginId: string;
}

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

export interface ApartmentContent extends OrganizationContent {}
export interface GvmtContent extends OrganizationContent {
  organizationDetailAddr: string;
  organizationAddrAreaName: string;
  organizationAddrAreaFullName: string;
}

export interface ApartmentPageable {
  sort: ApartmentSort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ApartmentSort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

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
