import type { Pagenation, PagingInfo } from '@/types/common';
import { DeviceRatio, NullableDeviceRatio } from '@/types/common';
/** @RequestParams 승인된 사이니지 기기를 삭제하기 위한 파라미터 */
export interface DeleteSignageDeviceParams {
    deviceId: number;
}
/** @RequestParams 사이니지 기기의 이름을 변경하기 위한 바디 */
export interface PatchSignageDeviceNameBody {
    deviceId: number;
    deviceName: string;
}
/** @RequestParams 사용자가 그룹을 신청한 내역을 얻기위한 파라미터 */
export interface SignageGroupApplyHistoryParams extends Pagenation {
}
/** @RequestParams 승인된 사이니지 기기의 목록을 가져오기 위한 파라미터 */
export interface ApprovedSignageDevicesParams extends Pagenation {
    groupRegYn: GroupRegYn;
    ratioType: NullableDeviceRatio;
    powerOn: PowerOn;
}
/** @RequestParams 심사가 반려된 그룹의 신청을 취소하기 위한 파라미터 */
export interface DeleteDecisionInProgressGroupParams {
    approvalId: number;
}
/** @RequestParams 결제된 사이니지 그룹의 목록을 받아오기 위한 파라미터 */
export interface PaidSignageGroupParams extends Pagenation {
    signageGroupPlayStatus?: GroupPlayStatus;
}
/** @RequestParams 그룹에 대한 정보를 얻기위한 파라미터 */
export interface SignageGroupDetailParams extends Pagenation {
    groupId: number;
}
/** @RequestParams 그룹의 이름을 수정하기 위한 파라미터 */
export interface PatchSignageGroupNameParams {
    id: number;
    name: string;
}
/** @RequestParams 심사가 반려된 그룹의 재신청을 할때 기존에 신청한 정보를 받아오기 위한 파라미터 */
export interface DecisionInProgressGroupDetailParams {
    approvalId: string;
}
/** @RequestParams 그룹 재신청할때 해당 그룹에 포함될 수 있는 디바이스들의 리스트를 기존 포함여부와 함께 조회하기 위해 사용되는 파라미터  */
export interface UseReApplyDeviceCanRegisterParams extends Pagenation {
    groupId: number;
    ratioType: DeviceRatio;
}
/** @RequestParams 결제될 사이니지 그룹에 대한 정보를 얻기 위한 파라미터  */
export type WillPayGroupDetailParams = string[];
/** @RequestBody 사이니지 그룹 결제하기 위한 바디  */
export interface ApplyPayGroupBody {
    groupIds: string[];
}
/** @RequestParams 사이니지 그룹 삭제하기 위한 파라미터  */
export interface SignageGroupDeleteParams {
    groupId: number;
}
/** @RequestParams 결제 취소될 그룹의 정보를 가져오기 위한 파라미터 */
export interface CancelPayGroupDetailParams {
    groupId: string;
}
/** @RequestParams 그룹 결제 취소에 사용되는 파라미터 */
export interface CancelPayGroupParams {
    groupId: string;
}
/** @RequestParams fetchApprovedNotPayGroup의 파라미터 */
export interface NotPaidGroupParams extends Pagenation {
}
/** @RequestParams 사이니지 그룹의 상세정보를 가져오기위해 사용되는 파라미터 */
export interface SignageGroupDetailInfoParams {
    groupId: number;
}
/** @RequestBody 사이니지 그룹의 기본 프로젝트를 변경하기 위한 바디 */
export interface PatchGroupDefaultProjectBody {
    groupId: number;
    projectId: number;
}
/** @Response 사이니지 기기등록시 선택할 수 있는 디바이스의 정보 */
export interface SignageDeviceSpecResponse {
    content: SignageDeviceSpec[];
}
/** @Response 승인된 사이니지 기기의 목록 */
export interface ApprovedSignageDevicesResponse extends PagingInfo {
    content: ApprovedSignageDevice[];
}
/** @Response 사용자가 그룹을 신청한 내역 */
export interface SignageGroupApplyHistoryResponse extends PagingInfo {
    content: SignageGroupHistory[];
}
/** @Response 결제된 사이니지 그룹의 목록 */
export interface PaidSignageGroupResponse extends PagingInfo {
    content: PaidSignageGroup[];
}
/** @Response 그룹에 대한 정보 */
export interface SignageGroupDetailResponse extends PagingInfo {
    content: SignageGroupDetail[];
}
/** @Response 그룹 재신청할때 해당 그룹에 포함될 수 있는 디바이스들의 리스트를 기존 포함여부 */
export interface UseReApplyDeviceCanRegisterResponse extends PagingInfo {
    content: DeviceCanRegister[];
}
/** @Response 결제될 사이니지 그룹에 대한 정보 */
export interface WillPayGroupDetailResponse {
    signageGroupElementDtos: PaySignageGroup[];
    deviceSumCount: number;
    nextPaymentDateTime: string;
    paymentAmount: number;
}
/** @Response 결제 취소될 그룹의 정보 */
export interface CancelPayGroupDetailResponse {
    signageGroupElementDto: PaySignageGroup;
    deviceSumCount: number;
    serviceEndTime: string;
}
/** @Response 승인이 되었지만 결제는 되지 않은 그룹 데이터 */
export interface NotPaidGroupResponse extends PagingInfo {
    content: NotPaidGroup[];
}
/** @Response 사이니지 그룹 상세 정보 */
export interface SignageGroupDetailInfoResponse {
    groupId: number;
    ratioType: DeviceRatio;
    groupName: string;
    deviceSumCount: number;
    deviceHealthOffCount: number;
    signageGroupPlayStatus: GroupPlayStatus;
    paymentStatus: PaymentStatus;
    deviceInfoList: DeviceInfo[];
    defaultProjectDetailDto: SignageDefaultProject;
    firstPaymentDt?: string;
    nextPaymentDt?: string;
    reservationMaxDt?: string;
    paymentCancellationDt?: string;
    updateDt: string;
}
/** @DTO 사이니지 기기등록시 선택할 수 있는 디바이스 */
export interface SignageDeviceSpec {
    id: number;
    productName: string;
    displayRatio: string;
    createDt: Date;
    manufacturer: string;
}
/** @DTO 승인된 사이니지 디바이스 정보 */
export interface ApprovedSignageDevice {
    deviceId: number;
    deviceRatioType: NullableDeviceRatio;
    signageDevicePlayStatus: SignageDevicePlayStatus;
    deviceHealthYn: string;
    deviceName: string;
}
/** @DTO 사용자의 그룹 신청 내역 */
export interface SignageGroupHistory {
    groupId: number;
    approvalId: number;
    deviceSumCount: number;
    signageGroupApprovalStatus: SignageGroupHistoryStatus;
    groupRatioType: DeviceRatio;
    groupName: string;
    approvalUpdateDt: string;
    rejectType?: GroupApplyRejectType;
    explanation?: string;
}
/** @DTO 결제된 사이니지 그룹 */
export interface PaidSignageGroup {
    groupId: number;
    approvalId: number;
    groupRatioType: DeviceRatio;
    groupName: string;
    deviceSumCount: number;
    deviceHealthOffCount: number;
    reservationProjectSumCount?: number;
    signageGroupPlayStatus: GroupPlayStatus;
    serviceEndTime?: string;
    signageProjectElementDto?: SignageProjectElement;
    paymentStatus?: PaymentStatus;
    signageGroupFirstPaymentDt?: string;
    signageGroupPaymentCancellationDt?: string;
    signageGroupNextPaymentDt?: string;
}
/** @DTO 사이니지 프로젝트 데이터 */
export interface SignageProjectElement {
    signageProjectId: number;
    signageProjectName: string;
    defaultProjectYn: boolean;
    projectPlayEndTime: string;
}
/** @DTO 사이니지 기본 프로젝트 데이터 */
export interface SignageDefaultProject {
    projectId: number;
    projectName: string;
    projectRatioType: DeviceRatio;
    defaultProjectYn: boolean;
    signageReserveStartDt?: string;
    signageReserveEndDt?: string;
}
/** @DTO 그룹 정보 */
export interface SignageGroupDetail {
    deviceId: number;
    groupId: number;
    deviceRatioType: NullableDeviceRatio;
    signageDevicePlayStatus: SignageDevicePlayStatus;
    deviceHealthYn: string;
    deviceName: string;
}
/** @DTO 심사가 반려된 그룹의 재신청을 할때 기존에 신청한 정보 */
export interface DecisionInProgressGroupDetail {
    groupId: number;
    approvalId: number;
    status: SignageGroupHistoryStatus;
    groupName: string;
    ratioType: DeviceRatio;
    deviceIdList: number[];
    fileDetailDtoList: ImageFileDetail[];
}
/** @DTO 심사가 반려된 그룹의 재신청을 할때 기존에 신청한 정보 중 이미지 */
export interface ImageFileDetail {
    fileId: number;
    fileType: string;
    fileName: string;
    url: string;
}
/** @DTO 그룹 재신청할때 해당 그룹에 포함될 수 있는 디바이스 정보 */
export interface DeviceCanRegister {
    deviceId: number;
    deviceName: string;
    ratioType: DeviceRatio;
    isInGroup: boolean;
}
/** @DTO 결제된 그룹의 정보 */
export interface PaySignageGroup {
    signageGroupId: number;
    signageGroupRatioType: DeviceRatio;
    signageGroupName: string;
    deviceSumCount: number;
    playYn: boolean;
}
/** @DTO 결제 영수증 데이터 */
export interface WillPayReciptInfo {
    deviceSumCount: number;
    nextPaymentDateTime: string;
    paymentAmount: number;
}
/** @DTO 승인되었지만 결제는 안된 그룹 */
export interface NotPaidGroup {
    groupId: number;
    approvalId: number;
    signageGroupApprovalStatus: SignageGroupHistoryStatus;
    groupRatioType: DeviceRatio;
    groupName: string;
    deviceSumCount: number;
    approvalUpdateDt: string;
}
/** @DTO 그룹에 속한 디바이스 정보 */
export interface DeviceInfo {
    deviceId: number;
    ratioType: DeviceRatio;
    deviceName: string;
    serialNum: SignageDevicePlayStatus;
    playStatus: string;
    updateDt: string;
}
/** @TYPE 사이니지 기기 상태 */
export type SignageDevicePlayStatus = 'PLAY_OFF' | 'PLAY_ON' | 'POWER_OFF';
/** @TYPE 사이니지 그룹인지 아닌지 명시하기 위한 불리언 타입 */
export type GroupRegYn = boolean | null;
/** @TYPE 사이니지 기기의 상태에 따라 필터조회를 하기 위한 불리언 타입 */
export type PowerOn = boolean | null;
/**
 * @TYPE 사이니지 기기 보유 상태에 따라 페이지를 분기처리하는 타입
 * NOT_EXISTENT_DEVICE("사이니지 디바이스가 등록되지 않음"),
 * EXISTENT_APPROVAL_CONFIRM_ING_DEVICE("심사중인 디바이스 신청이 있음"),
 * EXISTENT_DEVICE("사이니지 디바이스 존재하고 모든 신청이 승인됨"),
 */
export type RenderTypeDevicePage = 'EXISTENT_DEVICE' | 'EXISTENT_APPROVAL_CONFIRM_ING_DEVICE' | 'NOT_EXISTENT_DEVICE';
/**
 * @TYPE 사이니지 그룹의 신청 상태 타입
 * REQUEST_STATUS(0, "신청 상태"),
 * CONFIRM_ING_STATUS(1, "검토중 상태"),
 * APPROVAL_STATUS(2, "심사 승인 상태"),
 * NOT_APPROVAL_STATUS(3, "심사 거절 상태")
 */
export type SignageGroupHistoryStatus = 'REQUEST_STATUS' | 'CONFIRM_ING_STATUS' | 'APPROVAL_STATUS' | 'NOT_APPROVAL_STATUS';
/**
 * @TYPE 사용자의 현재 상태에 따라 그룹탭을 분기처리하기 위한 타입
 * NOT_EXISTENT_PAYMENT("결제 정보가 없음"),
 * NOT_EXISTENT_GROUP("사이니지 그룹이 없음"),
 * NOT_EXISTENT_APPROVED_GROUP("승인된 사이니지 그룹이 없음"),
 * NOT_EXISTENT_PAID_GROUP("결제된 사이니지 그룹이 없음"),
 * EXISTENT_GROUP("사이니지 그룹 존재"),
 */
export type RenderTypeGroupPage = 'NOT_EXISTENT_GROUP' | 'NOT_EXISTENT_APPROVED_GROUP' | 'NOT_EXISTENT_PAYMENT' | 'EXISTENT_GROUP' | 'NOT_EXISTENT_PAID_GROUP';
/**
 * @TYPE 그룹 심사 반려가 된 사유 타입
 * ET_CETERA(0, "기타 등등"),
 * WRONG_IMG_UPLOAD(1, "잘못된 사진이 업로드 되어있어요."),
 * NOT_INSTALLED_SIGNAGE_GROUP(2, "사이니지 그룹으로 설치가 안되어있어요.")
 */
export type GroupApplyRejectType = 'ET_CETERA' | 'WRONG_IMG_UPLOAD' | 'NOT_INSTALLED_SIGNAGE_GROUP';
/**
 * @TYPE 사이니지 그룹의 결제 상태 타입
 * UNPAID_STATUS(0, "결제 안된 상태"),
 * PAYMENT_STATUS(1, "결제 상태"),
 * PAYMENT_END_WAITING_STATUS(2, "결제 종료 대기 상태")
 */
export type PaymentStatus = 'UNPAID_STATUS' | 'PAYMENT_STATUS' | 'PAYMENT_END_WAITING_STATUS';
/**
 * @TYPE 사이니지 그룹 전원 상태 타입
 * ALL_DEVICE_POWER_OFF("그룹 내 모든 디바이스 전원 OFF"),
 * ALL_DEVICE_POWER_ON("그룹 내 모든 디바이스 전원 ON"),
 * SOME_DEVICE_POWER_OFF("그룹 내 몇 개의 디바이스 전원 OFF")
 */
export type GroupPlayStatus = 'ALL_DEVICE_POWER_OFF' | 'ALL_DEVICE_POWER_ON' | 'SOME_DEVICE_POWER_OFF' | null;
export type ReferralSource = {
    label: '홈페이지';
    value: 'INFLOW_HOMEPAGE';
} | {
    label: '전단지';
    value: 'INFLOW_AD_FLYER';
} | {
    label: '광고 전화';
    value: 'INFLOW_AD_CALL';
} | {
    label: '온닫이 어플';
    value: 'INFLOW_ONDAJI_APPLICATION';
};
