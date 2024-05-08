import type { CommonRequest, CommonResponse, PagingInfo } from '@/types/common';

// Request
export interface SignageDeviceDeleteParams {
  deviceId: number;
}

export interface SignageDeviceNamePatchBody {
  deviceId: number;
  deviceName: string;
}

export interface SignageGroupApprovalApplyHistoryParams extends CommonRequest {}

export interface SignageDeviceApprovedDeviceParams extends CommonRequest {
  groupRegYn: GroupRegYn;
  ratioType: DeviceRatio;
  powerOn: PowerOn;
}

export interface SignageGroupApprovalDeleteParams {
  approvalId: number;
}

export interface SignageApprovedGroupParams extends CommonRequest {
  signageGroupPlayStatus?: GroupPlayStatus;
}

export interface SignageGroupDetailParams extends CommonRequest {
  groupId: number;
}

export interface SignageGroupPatchNameParams {
  id: number;
  name: string;
}
export interface SignageGroupApprovalDetailParams {
  approvalId: string;
}

export interface SignageDeviceCanRegisterParams {
  groupId: number;
  ratioType: Exclude<DeviceRatio, null>;
  page: number;
  size: number;
}

export type WillPayGroupDetailParams = string[];

export interface ApplyPaymentGroupBody {
  groupIds: string[];
}

export interface SignageGroupDeleteParams {
  groupId: number;
}

export interface CancelPayGroupDetailParams {
  groupId: string;
}

/** @Request 그룹 결제 취소에 사용되는 파라미터 */
export interface CancelPayGroupParams {
  groupId: string;
}

/** @Request fetchApprovedNotPayGroup의 파라미터 */
export interface ApprovedNotPayGroupParams extends CommonRequest {}

// Response
export interface SignageDeviceSpecResponse extends CommonResponse {
  result: {
    content: SignageDeviceSpec[];
  };
}

export interface SignageDeviceCheckNameResponse extends CommonResponse {
  result: boolean;
}

export interface SignageDeviceCheckSerialNumResponse extends CommonResponse {
  result: boolean;
}

export interface SignageDeviceApprovalResponse extends CommonResponse {
  result: boolean;
}

export interface SignageDeviceApprovedDeviceResponse extends CommonResponse {
  result: {
    content: ApprovedSignageDevice[];
  } & PagingInfo;
}

export interface SignageDeviceDeleteResponse extends CommonResponse {
  result: boolean;
}

export interface SignageDeviceNamePatchResponse extends CommonResponse {
  result: boolean;
}

export interface SignageDeviceApprovalLocalboxDisplayCanTypeResponse
  extends CommonResponse {
  result: DisplayCanType;
}

export interface SignageGroupApprovalResponse extends CommonResponse {
  result: boolean;
}

export interface SignageGroupApprovalApplyHistoryResponse
  extends CommonResponse {
  result: {
    content: SignageGroupHistory[];
  } & PagingInfo;
}

export interface SignageGroupCheckNameResponse extends CommonResponse {
  result: boolean;
}

export interface SignageGroupApprovedLocalboxDisplayCanTypeResponse
  extends CommonResponse {
  result: GroupDisplayCanType;
}

export interface SignageGroupApprovalDeleteResponse extends CommonResponse {
  result: boolean;
}

export interface SignageApprovedGroupResponse extends CommonResponse {
  result: {
    content: ApprovedSignageGroup[];
  } & PagingInfo;
}

export interface SignageGroupDetailResponse extends CommonResponse {
  result: {
    content: SignageGroupDetail[];
  } & PagingInfo;
}

export interface SignageGroupNamePatchResponse extends CommonResponse {
  result: boolean;
}

export interface SignageGroupApprovalDetailResponse extends CommonResponse {
  result: SignageGroupApprovalDetail;
}

export interface SignageGroupApprovalDetailResponse extends CommonResponse {
  result: SignageGroupApprovalDetail;
}

export interface SignageDeviceCanRegisterResponse extends CommonResponse {
  result: {
    content: DeviceCanRegister[];
  } & PagingInfo;
}

export interface WillPayGroupDetailResponse extends CommonResponse {
  result: {
    signageGroupElementDtos: PaySignageGroup[];
    deviceSumCount: number;
    nextPaymentDateTime: string;
    paymentAmount: number;
  };
}

export interface ApplyPaymentGroupResponse extends CommonResponse {
  result: boolean;
}

export interface SignageGroupDeleteResponse extends CommonResponse {
  result: boolean;
}

export interface CancelPayGroupDetailResponse extends CommonResponse {
  result: {
    signageGroupElementDto: PaySignageGroup;
    deviceSumCount: number;
    serviceEndTime: string;
  };
}

/** @Response 그룹 결제 취소에 응답 */
export interface CancelPayGroupResponse extends CommonResponse {
  result: boolean;
}

/** @Response fetchApprovedNotPayGroup의 응답 */
export interface ApprovedNotPayGroupResponse extends CommonResponse {
  result: {
    content: ApprovedNotPayGroup[];
  } & PagingInfo;
}

// DTO
export interface SignageDeviceSpec {
  id: number;
  productName: string;
  displayRatio: string;
  createDt: Date;
  manufacturer: string;
}

export interface ApprovedSignageDevice {
  deviceId: number;
  deviceRatioType: DeviceRatio;
  signageDevicePlayStatus: SignageDevicePlayStatus;
  deviceHealthYn: string;
  deviceName: string;
}

export interface SignageGroupHistory {
  groupId: number;
  approvalId: number;
  deviceSumCount: number;
  signageGroupApprovalStatus: SignageGroupHistoryStatus;
  groupRatioType: Exclude<DeviceRatio, null>;
  groupName: string;
  approvalUpdateDt: string;
  rejectType?: GroupApplyRejectType;
  explanation?: string;
}

export interface ApprovedSignageGroup {
  groupId: number;
  approvalId: number;
  groupRatioType: Exclude<DeviceRatio, null>;
  groupName: string;
  deviceSumCount: number;
  deviceHealthOffCount: number;
  reservationProjectSumCount?: number;
  signageGroupPlayStatus: GroupPlayStatus;
  serviceEndTime?: string;
  signageProjectElementDto?: SignageProjectElement;
  paymentStatus?: PaymentStatus;
}

export interface SignageProjectElement {
  signageProjectId: number;
  signageProjectName: string;
  defaultProjectYn: boolean;
  projectPlayEndTime: string;
}
export interface SignageGroupDetail {
  deviceId: number;
  groupId: number;
  deviceRatioType: DeviceRatio;
  signageDevicePlayStatus: SignageDevicePlayStatus;
  deviceHealthYn: string;
  deviceName: string;
}

export interface SignageGroupApprovalDetail {
  groupId: number;
  approvalId: number;
  status: SignageGroupHistoryStatus;
  groupName: string;
  ratioType: Exclude<DeviceRatio, null>;
  deviceIdList: number[];
  fileDetailDtoList: ImageFileDetail[];
}

export interface ImageFileDetail {
  fileId: number;
  fileType: string;
  fileName: string;
  url: string;
}
export interface SignageGroupApprovalDetail {
  groupId: number;
  approvalId: number;
  status: SignageGroupHistoryStatus;
  groupName: string;
  ratioType: Exclude<DeviceRatio, null>;
  deviceIdList: number[];
  fileDetailDtoList: ImageFileDetail[];
}

export interface ImageFileDetail {
  fileId: number;
  fileType: string;
  fileName: string;
  url: string;
}

export interface DeviceCanRegister {
  deviceId: number;
  deviceName: string;
  ratioType: Exclude<DeviceRatio, null>;
  isInGroup: boolean;
}

export interface DeviceCanRegister {
  deviceId: number;
  deviceName: string;
  ratioType: Exclude<DeviceRatio, null>;
  isInGroup: boolean;
}

export interface DeviceCanRegister {
  deviceId: number;
  deviceName: string;
  ratioType: Exclude<DeviceRatio, null>;
  isInGroup: boolean;
}

export interface PaySignageGroup {
  signageGroupId: number;
  signageGroupRatioType: Exclude<DeviceRatio, null>;
  signageGroupName: string;
  deviceSumCount: number;
  playYn: boolean;
}

export interface WillPayReciptInfo {
  deviceSumCount: number;
  nextPaymentDateTime: string;
  paymentAmount: number;
}

/** @DTO 승인되었지만 결제는 안된 그룹 */
export interface ApprovedNotPayGroup {
  groupId: number;
  approvalId: number;
  signageGroupApprovalStatus: SignageGroupHistoryStatus;
  groupRatioType: Exclude<DeviceRatio, null>;
  groupName: string;
  deviceSumCount: number;
  approvalUpdateDt: string;
}

export type DeviceRatio = 'HOR_16_9' | 'VER_9_16' | null;

export type SignageDevicePlayStatus = 'PLAY_OFF' | 'PLAY_ON' | 'POWER_OFF';

export type GroupRegYn = boolean | null;

export type PowerOn = boolean | null;

export type DisplayCanType =
  | 'EXISTENT_DEVICE'
  | 'EXISTENT_APPROVAL_CONFIRM_ING_DEVICE'
  | 'NOT_EXISTENT_DEVICE';

export type SignageGroupHistoryStatus =
  | 'REQUEST_STATUS'
  | 'CONFIRM_ING_STATUS'
  | 'APPROVAL_STATUS'
  | 'NOT_APPROVAL_STATUS';

export type GroupDisplayCanType =
  | 'NOT_EXISTENT_GROUP'
  | 'NOT_EXISTENT_APPROVED_GROUP'
  | 'NOT_EXISTENT_PAYMENT'
  | 'EXISTENT_GROUP'
  | 'NOT_EXISTENT_PAID_GROUP';

export type GroupApplyRejectType =
  | 'ET_CETERA'
  | 'WRONG_IMG_UPLOAD'
  | 'NOT_INSTALLED_SIGNAGE_GROUP';

export interface SignageDeviceDisplayCan {
  signageDeviceDisplayCanType: DisplayCanType;
}
export type PaymentStatus =
  | 'UNPAID_STATUS'
  | 'PAYMENT_STATUS'
  | 'PAYMENT_END_WAITING_STATUS';

export type GroupPlayStatus =
  | 'ALL_DEVICE_POWER_OFF'
  | 'ALL_DEVICE_POWER_ON'
  | 'SOME_DEVICE_POWER_OFF'
  | null;

// DataType
export type ReferralSource =
  | { label: '홈페이지'; value: 'INFLOW_HOMEPAGE' }
  | { label: '전단지'; value: 'INFLOW_AD_FLYER' }
  | { label: '광고 전화'; value: 'INFLOW_AD_CALL' }
  | { label: '온닫이 어플'; value: 'INFLOW_ONDAJI_APPLICATION' };
