import { CommonResponse } from '@/types/common';
import { MultiPolygon } from '@/types/map';

export type InsertBannerType = 'AD' | 'RESIDENT_NEWS';

export type ContentsType = 'VILLAGE_NEWS' | 'RESIDENT_NEWS' | 'AD';

export type CreatorType =
  | 'LOCALBOX_MEMBER'
  | 'LOCALBOX_BUSINESS'
  | 'LOCALBOX_GVMT'
  | 'LOCALBOX_APARTMENT'
  | 'LOCALBOX_LOCAL_NEWSPAPER';

// 콘텐츠 목록 관련 객체 type 정의
export interface OwnerLocalboxDtoType {
  localboxId: number;
  localboxCreatorType: CreatorType;
  localboxName: string;
  townPointLongiX: number;
  townPointLatiY: number;
  townAreaName: string;
  townAreaFullName: string;
  profileImage: string;
  subscribeYn: boolean;
}

export interface ContentsFileDtosType {
  id: number;
  contentsId: number;
  fileType: string | null;
  fileName: string;
  showImageUrl: string;
  locationTag: string | null;
  represent: boolean;
}

export interface ContentsHashTagDtosType {
  id: number;
  contentsId: number;
  hashTagId: number;
  tagName: string;
  orderNum: number;
}

export interface LrateDtosType {
  id: number;
  contentsId: number;
  areaName: string;
  areaFullName: string;
  rate: number;
}

export interface WriterLocalboxDtoType {
  localboxId: number;
  localboxCreatorType: CreatorType;
  localboxName: string;
  townPointLongiX: number;
  townPointLatiY: number;
  townAreaName: string;
  townAreaFullName: string;
  profileImage: string;
}

// 콘텐츠 상세 관련 객체 type 정의
export interface CountInfoType {
  id: number;
  contentsId: number;
  contentsLikeCountByNormalUser: number;
  contentsLikeCountByJuryUser: number;
  contentsNotLikeCountByNormalUser: number;
  contentsNotLikeCountByJuryUser: number;
  contentsViewCount: number;
  contentsBookmarkCount: number;
  contentsReplyCount: number;
  complainProcessCount: number;
  localityComplainProcessCount: number;
  createDt: string;
  updateDt: string;
}

export interface LocalBoxType {
  localboxId: number;
  localboxCreatorType: CreatorType;
  localboxName: string;
  townPointLongiX: number;
  townPointLatiY: number;
  townAreaName: string;
  townAreaFullName: string;
  profileImage: string;
  createDt: string;
  subscribeYn: boolean;
}

export interface UserType {
  userId: number;
  loginId: string;
  mobile: string;
  name: string;
  nickName: string;
  profileImage: string;
  userType: string;
  notifyTownLifeYn: boolean;
  notifyEventYn: boolean;
}

export interface SubContentType {
  villageContentsId: number;
  villageContentsType: string;
  villageContentsTitle: string;
  villageContentsSummary: string;
  villageContentsRepresentImgUrl: string;
  postingContentsId: number;
  postingContentsType: InsertBannerType;
  postingContentsTitle: string;
  postingContentsSummary: string;
  postingContentsRepresentImgUrl: string;
  connectStatus: string;
}

// 콘텐츠 등록

// 임시저장
export type ContentTextType = '동네소식' | '주민소식' | ' 광고';

export type DisplayDeviceType = '메인' | '사이니지' | '메인사이니지';

export interface GetTemporaryContentItemType {
  title: string;
  contentType: ContentTextType;
  displayDeviceType: DisplayDeviceType;
  saveDate: number;
}

// 콘텐츠 목록
export interface ContentListType {
  id: number;
  ownerLocalboxDto: OwnerLocalboxDtoType;
  deviceType: string;
  contentsType: string;
  displayYn: boolean;
  adYn: boolean;
  deleteYn: boolean;
  title: string;
  summary: string;
  explanation: string;
  displayLongitude: number;
  displayLatitude: number;
  representImgUrl: string;
  createDt: string;
  updateDt: string;
  likeCount: number;
  commentCount: number;
  liked: boolean;
  disliked: boolean;
  bookmarked: boolean;
  contentsFileDtos: ContentsFileDtosType[];
  contentsHashTagDtos: ContentsHashTagDtosType[];
  lrateHangDtos?: LrateDtosType[];
  lrateBeopDtos?: LrateDtosType[];
}

// 콘텐츠 상세
export interface ContentDetailType {
  id: number;
  displayDeviceType: string;
  contentsType: string;
  displayYn: boolean;
  adYn: boolean;
  deleteYn: boolean;
  title: string;
  summary: string;
  explanation: string;
  displayRadius: number;
  displayLongitude: number;
  displayLatitude: number;
  representImgUrl: string;
  representMovUrl: null;
  createDt: string;
  updateDt: string;
  liked: boolean;
  disliked: boolean;
  bookmarked: boolean;
  countInfoDto: CountInfoType;
  fileDtoList?: ContentsFileDtosType[];
  hashTagDtoList: ContentsHashTagDtosType[];
  localrateBeopDtoList: LrateDtosType[];
  localrateHangDtoList: LrateDtosType[];
  contentsSignageScreenSettingSelDto: null;
  localboxDto: LocalBoxType;
  userDto: UserType;
  postingContentsInfoDto: SubContentType;
}

// 댓글
export interface CommentType {
  contentsId: number;
  contentsReplyId: number;
  liked: boolean;
  likeCount: number;
  repl: string;
  updateDt: string;
  writerLocalboxDto: WriterLocalboxDtoType;
}

/* response */
export interface ContentRegisterResponse extends CommonResponse {
  result: string;
}

export interface ContentVillageNewsResponse extends CommonResponse {
  result: boolean;
}

export interface LocalBoxMyTownResponse extends CommonResponse {
  result: string;
}
