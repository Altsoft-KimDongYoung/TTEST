import type {
  CommonResponse,
  FontType,
  HorizontalAlignType,
  Pagenation,
  PagingInfo,
  VerticalAlignType,
} from '@/types/common';

import { GroupPlayStatus } from './signage';

/** @RequestParams 사이니지 프로젝트 목록 데이터를 가져오는 API에 사용되는 파라미터 */
export interface ProjectListParams extends Pagenation {
  ratioType: DeviceRatio;
}

/** @RequestParams 사이니지 프로젝트에 등록할 수 있는 컨텐츠의 목록을 가져오는 API에 사용되는 파라미터 */
export interface ContentListCanRegisterParams extends Pagenation {
  ratioType: DeviceRatio;
}

/** @RequestParams 사이니지 프로젝트 등록에 사용되는 바디 */
export interface RegisterProjectRequestBody {
  projectName: string;
  ratioType: DeviceRatio;
  signageProjectContentRegDtos: {
    contentId: number;
    displayTime: number;
  }[];
}

/** @RequestParams 사이니지 프로젝트 등록에 사용되는 파라미터 */
export interface DeleteProjectParams {
  projectId: number;
}

/** @RequestParams 프로젝트를 사용하는 그룹들 조회에 사용되는 파라미터 */
export interface ListOfGroupExecuteProjectParams {
  projectId: number;
}

/** @Response fetchProjectList의 응답 */
export interface ProjectListResponse extends PagingInfo {
  content: Project[];
}

/** @Response fetchProjectCanRegisterContent 응답 */
export interface ContentListCanRegisterResponse extends PagingInfo {
  content: ProjectCanRegisterContent[];
}

/** @DTO 프로젝트 정보 */
export interface Project {
  projectId: number;
  projectName: string;
  ratioType: DeviceRatio;
  totalDisplayTime: number;
  reservationCount: number;
  isDefaultProject: boolean;
}

/** @DTO 사이니지 프로젝트에 등록할 수 있는 컨텐츠 */
export interface ProjectCanRegisterContent {
  contentId: number;
  contentTitle: string;
  contentRepresentFileType: 'IMG_FILE';
  contentRepresentFileUrl: string;
  ratioType: DeviceRatio;
}

/** @DTO 사이니지 컨텐츠 정보 */
export interface SignageContentInfo {
  contentId: number;
  contentRepresentFileType: string;
  contentRepresentFileUrl: string;
  contentSignageId: number;
  ratioType: string;
  titleDto: TextInfo;
  summaryDto: TextInfo;
}

/** @DTO 사이니지 컨텐츠 텍스트 정보 */
export interface TextInfo {
  text: string;
  fontSize: FontType;
  fontColor: string;
  horizontalAlign: HorizontalAlignType;
  verticalAlign: VerticalAlignType;
}

/** @DTO 그룹 정보 카운트 */
export interface GroupCount {
  ratioType: DeviceRatio;
  groupCount: number;
}

/** @DTO 프로젝트를 사용하는 그룹 */
export interface GroupExecuteProject {
  groupId: number;
  groupRatioType: DeviceRatio;
  groupName: string;
  deviceSumCount: number;
  deviceHealthOffCount: number;
  signageGroupPlayStatus: GroupPlayStatus;
}

/** @SIGNAGE 프로젝트 등록시에 사용되는 컨텐츠 Type */
export interface ProjectContent {
  contentId: number;
  imageUrl: string;
  contentTitle: string;
}

/** @SIGNAGE 사이니지의 비율 */
type DeviceRatio = 'HOR_16_9' | 'VER_9_16';

/** @SIGNAGE ProjectCanRegisterContent 타입을 클라이언트 데이터로 변환할때 사용돠는 타입 */
export interface ProjectCanRegisterContentState
  extends ProjectCanRegisterContent {
  count: number;
}

/** @SIGNAGE 프로젝트 등록시에 Form 타입 */
export interface ProjectRegisterForm {
  projectName: string;
  ratio: DeviceRatio;
  contentId: (number | undefined)[];
  displayTime: number;
}
