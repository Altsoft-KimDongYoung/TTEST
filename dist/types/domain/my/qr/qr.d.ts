/** @Type @Response QR 주민인증 관리 타입  */
export type CertifyType = 'NOT_APPROVAL_CERTIFY_TYPE' | 'APPROVAL_CERTIFY_TYPE' | 'MANAGEMENT_CERTIFY_TYPE';
/** @Type 어떤 형태의 기관에 인증했는지 구분하기 위해 사용하는 타입 */
export type CertifyOrganizationType = 'APARTMENT' | 'GOVERNMENT';
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
/** @DTO 주민인증 상위 기관 dto */
export interface ResidentNewsWriterDto {
    writerName: string;
    registerYn: boolean;
}
/** @Response 내 동네 안에 있는 주민인증 할 수 있는 기관 정보 조회 */
export interface InMyTownCertifyOrganizationResponse {
    myTownLatitudeX: number;
    myTownLongitudeY: number;
    certifyOrganizationDtos: CertifyOrganizationDto[];
}
/** @Request QR 주민인증 지도에서 미가입 기관 주소 등록할 때 보내는 값 */
export interface OrganizationRequestJoinAddressRequestBody {
    organizationType: CertifyOrganizationType;
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
/** @Response 관공서, 아파트 유저 외에 모든 회원이 주민인증한 리스트 */
export interface MyCertifyResponse {
    certifyId: number;
    certifyOrganizationId: number;
    certifyOrganizationName: string;
    certifyOrganizationType: CertifyOrganizationType;
    residentNewsWriterDtos: ResidentNewsWriterDto[];
}
/** @Response 관공서(주민센터), 아파트 크리에이터가 관리하는 주민인증 QR 이미지 조회 response */
export interface QRManageCertifyImageResponse {
    qrImageId: number;
    organizationId: number;
    organizationName: string;
    organizationType: string;
    certifyKey: string;
    certificationParameter: string;
    certificationUrl: string;
}
export interface ParentHierarchyById {
    id: number;
    parentId: number;
    organizationType: string;
    organizationDepth: number;
    organizationName: string;
    existManager: boolean;
    organizationBaseAddr: string;
    organizationDetailAddr: string;
    organizationAddrPointX: number;
    organizationAddrPointY: number;
    organizationAddrAreaName: string;
    organizationAddrAreaFullName: string;
    createDt: string;
    updateDt: string;
}
/** @Response 부모 행정기관 조회 (By organizationId) */
export type OrganizationParentHierarchyListByIdResponse = ParentHierarchyById[];
/** @Request QR 주민인증 */
export interface QRCertifyJuminRequestBody {
    qrId: string;
    certificationKey: string;
}
/** @Request QR 스캔 직후, QR 인증이 가능한지 확인하기 위한 params */
export interface QRCanCertifyJuminRequestParams {
    qrId: string;
    certifyKey: string;
}
