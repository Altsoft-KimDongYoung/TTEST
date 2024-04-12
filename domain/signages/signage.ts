import type { CommonResponse, PagingInfo } from '@/types/common';

// Request
export interface SignageDeviceDeleteParams {
  deviceId: number;
}

export interface SignageDeviceNamePatchBody {
  deviceId: number;
  deviceName: string;
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
