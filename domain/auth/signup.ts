/** @AUTH 공통 회원가입 퐁  */
export interface SignupCommonForm {
  loginId: string;
  password: string;
  passwordConfirm: string;
  mobile: string;
  name: string;
  nickname: string;
  profileImg: File | null;
}

/** @AUTH 일반 회원 폼 */
export interface SignupMemberForm extends SignupCommonForm {
  townPointLongiX: string;
  townPointLatiY: string;
  email?: string;
}

/** @AUTH 기업회원 폼 */
export interface SignupBusinessForm extends SignupCommonForm {
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
  businessAddressPointLongiX: string;
  businessAddressPointLatiY: string;
}

/** @AUTH 아파트회원 폼 */
export interface SignupApartmentForm extends SignupCommonForm {
  email: string;
  organizationId: string;
  contactNumber: string;
  ownerName: string;
  organizationName: string;
  employmentFile: File | null;
}

/** @AUTH 관공서회원 폼 */
export interface SignupGvmtForm extends SignupCommonForm {
  email: string;
  organizationName: string;
  organizationId: string;
  contactNumber: string;
  contactName: string;
  employmentFile: File | null;
}

/** @AUTH 지역 신문사회원 폼 */
export interface SignupLocalNewspaperForm extends SignupCommonForm {
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
  licenseImg: File | null;
  employmentFile: File | null;
}
