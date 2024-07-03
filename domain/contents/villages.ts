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

/** @DTO 콘텐츠 노출 지역 및 주변 지역 수 */
export interface ContentDisplayAreaInfo {
  apiId: number;
  areaName: string;
  displayAreaCount: number;
}

/** @RequestBody 콘텐츠 수정 */
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

/** @RequestParams 콘텐츠 노출 지역 (반지름, 좌표) */
export interface ContentDisplayAreaParams {
  radius: number;
  longiX: number;
  latiY: number;
}

/** @Response 동네소식 수정 */
export interface VillageNewsPutResponse {
  id: number;
  updateType: string;
}

/** @Response 콘텐츠 지역성 신고 가능 여부 */
export interface ComplainCanContentLocalityResponse {
  can: boolean;
}

/** @Request 콘텐츠 지역성 신고 */
export interface ComplainContentLocalityBody {
  contentId: number;
  explanation?: string;
}
