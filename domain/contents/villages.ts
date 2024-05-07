import { CommonResponse } from '@/types/common';

import { ContentHashTag } from './contents';

export type Villages = 'villages';

export interface DisplayGpsSettingType {
  displayRadius: number;
  displayLongitude: number;
  displayLatitude: number;
}

export interface RegFileDtoType {
  fileType: string;
  multipartFile: File | null;
}

export interface RegisterFormType {
  title: string;
  body: string;
  bodyText: string;
  hashTags: string[];
  regFileDto: RegFileDtoType;
}

// 콘텐츠 등록 form
export interface ContentForm {
  displayDeviceType: string;
  title: string;
  body: string;
  bodyText: string;
  displayGpsSetting: DisplayGpsSettingType;
  hashTags: string[];
  regFileDto: RegFileDtoType;
}

export interface ContentDisplayAreaInfo {
  apiId: number;
  areaName: string;
  displayAreaCount: number;
}

/** @Dto 콘텐츠 수정 */
export interface ContentEditBody {
  id: number;
  displayDeviceType: string;
  title: string;
  body: string;
  bodyText: string;
  displayGpsSetting: DisplayGpsSettingType;
  hashTags: string[];
  regFileDto: { fileType: string; multipartFile: File | string };
}

/** params */

// 콘텐츠 노출 지역
export interface ContentDisplayAreaParams {
  radius: number;
  longiX: number;
  latiY: number;
}

/* response */
export interface ContentDisplayAreaReponse extends CommonResponse {
  result: ContentDisplayAreaInfo;
}

/**@Response 콘텐츠 수정 */
export interface VillageNewsPutResponse extends CommonResponse {
  result: {
    id: number;
    updateType: string;
  };
}
