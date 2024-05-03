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

/** @회원가입 @기업회원  폼 */
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

/** @RequestParams 회원가입 PinCode SMS, Email 전송 */
export interface UserSendJoinParams {
  userName: string;
  mobile: string;
  email: string;
}

/** @RequestParams 회원가입 PinCode SMS, Email 인증 */
export interface UserJoinConfirmParams {
  mobile: string;
  email: string;
  pinCode: string;
}

/** @RequestParams 회원가입 내 동네 영역 조회 */
export interface AreaPointMyTownParams {
  latiY: string | number;
  longiX: string | number;
}

/** @RequestParams 아이디 중복 체크 */
export interface UserCheckDuplicateLoginIdParams {
  loginId: string;
}

/** @Response 회원가입 내 동네 영역 조회 */
export interface AreaPointMyTownResponse {
  apiId: number;
  apiType: string;
  apiDepth: number;
  areaName: string;
  areaFullName: string;
  multiPolygonStr: any;
}
