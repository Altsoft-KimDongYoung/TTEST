export type Residents = 'residents';

// 주민소식 등록 hook-form 에서 사용되는 INIT_FORM 모음

/** @CONTENT 주민소식(메인 콘텐츠) 기본 폼 형태  */
export const MOBILE_INIT_FORM = {
  id: 0,
  displayDeviceType: '',
  title: '',
  body: '',
  bodyText: '',
  shareOrganizationIds: [],
  hashTags: [],
  fileType: 'IMG_FILE',
  multipartFile: null,
};

/** @CONTENT 주민소식(사이니지 콘텐츠) 기본 폼 형태  */
export const SIGNAGE_INIT_FORM = {
  id: 0,
  displayDeviceType: '',
  ratioType: '',
  title: '',
  titleFontSize: '',
  titleFontColor: '',
  titleHorizontalAlign: '',
  titleVerticalAlign: '',
  summary: '',
  summaryFontSize: '',
  summaryFontColor: '',
  summaryHorizontalAlign: '',
  summaryVerticalAlign: '',
  fileType: 'IMG_FILE',
  multipartFile: null,
};

/** @CONTENT 주민소식(메인+사이니지 콘텐츠) 기본 폼 형태  */
export const MIXED_INIT_FORM = {
  id: 0,
  displayDeviceType: '',
  ratioType: '',
  title: '',
  titleFontSize: '',
  titleFontColor: '',
  titleHorizontalAlign: '',
  body: '',
  bodyText: '',
  hashTags: [],
  summary: '',
  summaryFontSize: '',
  summaryFontColor: '',
  summaryHorizontalAlign: '',
  fileType: 'IMG_FILE',
  multipartFile: null,
};

/** @DTO 주민소식 등록 시 담당기관의 산하 기관 데이터 */
export interface ChildOrganizationDto {
  id: number;
  parentId: number;
  organizationType: string;
  organizationDepth: number;
  organizationName: string;
  organizationBaseAddr: string;
  organizationAddrPointX: number;
  organizationAddrPointY: number;
  organizationAddrAreaName: string;
  organizationAddrAreaFullName: string;
  organizationDetailAddr: string;
  createDt: string;
  updateDt: string;
}
