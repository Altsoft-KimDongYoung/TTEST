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
  paidYn?: boolean;
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

export interface SignageDeviceCanRegisterResponse extends CommonResponse {
  result: {
    content: DeviceCanRegister[];
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
  groupRatioType: Exclude<DeviceRatio, null>;
  groupName: string;
  deviceSumCount: number;
  reservationProjectSumCount: number;
  deviceOperateYn: boolean;
  serviceEndTime: string;
  signageProjectElementDto?: SignageProjectElement;
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

export interface DeviceCanRegister {
  deviceId: number;
  deviceName: string;
  ratioType: Exclude<DeviceRatio, null>;
  isInGroup: boolean;
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
  | 'EXISTENT_APPROVAL_CONFIRM_ING_GROUP'
  | 'NOT_REG_PAYMENT'
  | 'EXISTENT_GROUP';

export type GroupApplyRejectType =
  | 'ET_CETERA'
  | 'WRONG_IMG_UPLOAD'
  | 'NOT_INSTALLED_SIGNAGE_GROUP';

// DataType
export type ReferralSource =
  | { label: '홈페이지'; value: 'INFLOW_HOMEPAGE' }
  | { label: '전단지'; value: 'INFLOW_AD_FLYER' }
  | { label: '광고 전화'; value: 'INFLOW_AD_CALL' }
  | { label: '온닫이 어플'; value: 'INFLOW_ONDAJI_APPLICATION' };

export type DeviceRatio = 'HOR_16_9' | 'VER_9_16' | null;

export type SignageDevicePlayStatus = 'PLAY_OFF' | 'PLAY_ON' | 'POWER_OFF';

export type GroupRegYn = boolean | null;

export type PowerOn = boolean | null;

export type DisplayCanType =
  | 'EXISTENT_DEVICE'
  | 'EXISTENT_APPROVAL_CONFIRM_ING_DEVICE'
  | 'NOT_EXISTENT_DEVICE';
