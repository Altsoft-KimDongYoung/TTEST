import { LocalboxCreatorType } from '@/types/common';

export interface FileInto {
  originalName: string;
  url: string;
}

/** @Response 마이 프로필 상세 조회 */
export type FetchMyProfileResponse<T = MyProfileOfMemberDto> = T;

/** @Response 마이 프로필 상제 조회 (일반 회원 DTO) */
export interface MyProfileOfMemberDto {
  localboxCreatorType: LocalboxCreatorType;
  localboxName: string;
  localboxProfileImgUrl: string;
  loginId: string;
  mobile: string;
  userId: number;
  profileImg: File | null;
}

/** @Request pinCode SMS 전송 (휴대폰 번호 변경용) */
export interface FetchUserSendSMSChangeMobileParams {
  userName: string;
  mobile: string;
}

/** @Request pinCode SMS 인증 (휴대폰 번호 변경용) */
export interface FetchUserConfirmSMSChangeMobileParams {
  userName: string;
  mobile: string;
  pinCode: string;
}

/** @Request 사용자 비밀번호 확인  */
export interface FetchCheckPasswordParams {
  password: string;
}

/** @Request 사용자 비밀번호 변경 */
export interface PutPasswordBody {
  password: string;
  newPassword: string;
}

/** @Form 마이프로필 - 일반회원 */
export interface MyProfileOfMemberForm {
  loginId: string;
  profileImg: File | null;
  localboxProfileImgUrl?: string;
  nickname: string;
  name: string;
  currentPhoneNumber: string;
  newPhoneNumber: string;
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}
