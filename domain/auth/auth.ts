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

/** @Response 내 동네 영역 조회 */
export interface AreaPointMyTownResponse {
  apiId: number;
  apiType: string;
  apiDepth: number;
  areaName: string;
  areaFullName: string;
  multiPolygonStr: any;
}

/** @RequeryParams 아파트명으로 검색하는 리스트 페이지 조회 */
export interface OrganizationApartmentParams {
  organizationName: string;
  page?: string;
  size?: string;
}

/** @Response 아파트명으로 검색하는 리스트 페이지 조회 */
export interface OrganizationApartmentResponse {
  content: ApartmentContent[];
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
}

/** @OrganizationApartmentResponse content */
export interface ApartmentContent {
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

/** @OrganizationApartmentResponse pageable */
export interface ApartmentPageable {
  sort: ApartmentSort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

/** @OrganizationApartmentResponse sort */
export interface ApartmentSort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
