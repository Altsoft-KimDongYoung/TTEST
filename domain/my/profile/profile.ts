import { IndexSignature, LocalboxCreatorType } from '@/types/common';

/** @MY 페이지 이동시 pathname, step query에 대한 타입 */
export interface WithQueryStep {
  pathname: string;
  query: IndexSignature<'step', string>;
}

export interface FileInfo {
  originalName: string;
  url: string;
}

/** @MY 마이페이지  */
export interface MyPage {
  localboxProfileImgUrl?: string;
  loginId: string;
  nickname: string;
}

/** @MY 마이프로필 - 회원 공통 폼 */
export interface CommonProfileForm {
  loginId: string;
  profileImg?: File | null;
  localboxProfileImgUrl?: string;
  nickname: string;
  name: string;
  currentPhoneNumber: string;
  newPhoneNumber: string;
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

/** @MY 마이프로필 - 일반 회원 폼 */
export interface MemberProfileForm extends CommonProfileForm {
  newEmail?: string;
  currentEmail?: string;
}

/** @MY 마이프로필 - 기업 회원 폼 */
export interface BusinessMemberProfileForm extends CommonProfileForm {
  businessLicenseFileInfo: FileInfo;
  businessName: string;
  businessNumber: string;
  businessOpenDt: string;
  ownerName: string;
  serviceName?: string;
  homepageUrl?: string;
  newEmail: string;
  currentEmail: string;
}

/** @MY 마이프로필 - 아파트 회원 폼 */
export interface ApartmentMemberProfileForm extends CommonProfileForm {
  employmentFileInfo: FileInfo;
  organizationName: string;
  ownerName: string;
  newEmail: string;
  currentEmail: string;
}

/** @MY 마이프로필 - 관공서 회원 폼 */
export interface GVMTMemberProfileForm extends CommonProfileForm {
  employmentFileInfo: FileInfo;
  organizationName: string;
  contactName: string;
  newEmail: string;
  currentEmail: string;
}

/** @MY 마이프로필 - 지역신문사 회원 폼 */
export interface LocalNewspaperMemberProfileForm extends CommonProfileForm {
  businessLicenseFileInfo: FileInfo;
  employmentFileInfo: FileInfo;
  businessName: string;
  businessNumber: string;
  businessOpenDt: string;
  organizationName: string;
  ownerName: string;
  serviceName: string;
  homepageUrl?: string;
  newEmail: string;
  currentEmail: string;
  newspaperRegNumber: string;
}

/** @Response 마이 프로필 상세 조회 */
export type FetchMyProfileResponse<
  T =
    | MemberProfileDTO
    | BusinessMemberProfileDTO
    | ApartmentMemberProfileDTO
    | GVMTMemberProfileDTO
    | LocalNewspaperMemberProfileDTO
> = T;

/** @DTO 마이프로필 상세 조회 (회원 공통 DTO) */
export interface CommonProfileDTO {
  profileImg?: File | null;
  localboxCreatorType: LocalboxCreatorType;
  localboxName: string;
  localboxProfileImgUrl: string;
  loginId: string;
  mobile: string;
  userId: number;
}

/** @DTO 마이프로필 상세 조회 (일반 회원 DTO) */
export interface MemberProfileDTO extends CommonProfileDTO {
  email?: string;
}

/** @DTO 마이프로필 상세 조회 (기업 회원 DTO) */
export interface BusinessMemberProfileDTO extends CommonProfileDTO {
  businessLicenseFileInfo: FileInfo;
  licenseFile: File | null;
  businessName: string;
  businessNumber: string;
  businessOpenDt: string;
  email: string;
  ownerName: string;
  serviceName?: string;
  homepageUrl?: string;
}

/** @DTO 마이프로필 상세 조회 (아파트 회원 DTO) */
export interface ApartmentMemberProfileDTO extends CommonProfileDTO {
  employmentFileInfo: FileInfo;
  employmentFile: File | null;
  organizationName: string;
  email: string;
  ownerName: string;
  homepageUrl?: string;
}

/** @DTO 마이프로필 상세 조회 (관공서 회원 DTO) */
export interface GVMTMemberProfileDTO extends CommonProfileDTO {
  employmentFileInfo: FileInfo;
  employmentFile: File | null;
  organizationName: string;
  email: string;
  contactName: string;
}

/** @DTO 마이프로필 상세 조회 (지역신문사 회원 ) */
export interface LocalNewspaperMemberProfileDTO extends CommonProfileDTO {
  businessLicenseFileInfo: FileInfo;
  licenseFile: File | null;
  employmentFileInfo: FileInfo;
  employmentFile: File | null;
  businessName: string;
  businessNumber: string;
  businessOpenDt: string;
  organizationName: string;
  ownerName: string;
  serviceName: string;
  email: string;
  newspaperRegNumber: string;
  homepageUrl?: string;
}

/** @RequestParams pinCode SMS 전송 (휴대폰 번호 변경용) */
export interface FetchUserSendSMSChangeMobileParams {
  userName: string;
  mobile: string;
}

/** @RequestParams pinCode SMS 인증 (휴대폰 번호 변경용) */
export interface FetchUserConfirmSMSChangeMobileParams {
  userName: string;
  mobile: string;
  pinCode: string;
}

/** @RequestParams PinCode Email 전송 (이메일 변경용) */
export interface FetchUserSendMailChangeEmailParams {
  email: string;
}

/** @RequestParams PinCode Email 인증 (이메일 변경용) */
export interface FetchUserConfirmEmailChangeEmailParams {
  email: string;
  pinCode: string;
}

/** @RequestParams 사용자 비밀번호 확인  */
export interface FetchCheckPasswordParams {
  password: string;
}

/** @RequestParams 사용자 비밀번호 변경 */
export interface PutPasswordBody {
  password: string;
  newPassword: string;
}
