import type { CommonResponse } from '@/types/common';

// Request
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

// DTO
export interface SignageDeviceSpec {
  id: number;
  productName: string;
  displayRatio: string;
  createDt: Date;
  manufacturer: string;
}

// DataType
export type ReferralSource =
  | { label: '홈페이지'; value: 'INFLOW_HOMEPAGE' }
  | { label: '전단지'; value: 'INFLOW_AD_FLYER' }
  | { label: '광고 전화'; value: 'INFLOW_AD_CALL' }
  | { label: '온닫이 어플'; value: 'INFLOW_ONDAJI_APPLICATION' };
