import { ParentHierarchy } from '../../auth';

/** @Type @Response QR 주민인증 관리 타입  */
export type CertifyType =
  | 'NOT_APPROVAL_CERTIFY_TYPE'
  | 'APPROVAL_CERTIFY_TYPE'
  | 'MANAGEMENT_CERTIFY_TYPE';

/** @DTO 주민인증 할 수 있는 기관 정보 */
export interface CertifyOrganizationDto {
  organizationId: number;
  organizationName: string;
  organizationLatitudeX: number;
  organizationLongitudeY: number;
  organizationAddr: string;
  certifyCanYn: boolean;
  reqJoinApplyYn: boolean;
}

/** @Response 내 동네 안에 있는 주민인증 할 수 있는 기관 정보 조회 */
export interface InMyTownCertifyOrganizationResponse {
  myTownLatitudeX: number;
  myTownLongitudeY: number;
  certifyOrganizationDtos: CertifyOrganizationDto[];
}

/** @Request QR 주민인증 지도에서 미가입 기관 주소 등록할 때 보내는 값 */
export interface OrganizationRequestJoinAddressRequestBody {
  organizationType: string;
  jibunAddress: string;
  roadAddress: string;
  buildingCode: string;
  buildingName: string;
  sido: string;
  sigunguCode: string;
  sigungu: string;
  bcode: string;
  bname: string;
  bname1: string;
  hname: string;
}
