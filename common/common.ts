import { MultiPolygon } from '../map';

export type KeyOf<T> = Extract<keyof T, string>;
export type ValueOf<T> = T[KeyOf<T>];
export type NonEmptyArray<T> = readonly [T, ...T[]];
export type Many<T> = T | NonEmptyArray<T>;
export interface Slug {
  slug: number;
}

export interface CommonRequest {
  page?: number;
  size?: number;
}

export interface CommonKeyLabel<T> {
  key: T;
  label: string;
}

export type ApiResponseSuccess<T> = {
  message: string;
  result: T;
};

export type ApiResponseFailed = {
  returnCode: string;
  description: string;
};

// export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseFailed;
export type ApiResponse<T> = ApiResponseSuccess<T>;
export interface CommonResponse {
  message: string;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface PagingInfo {
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface AreaPointMyTownParams {
  latiY: string | number;
  longiX: string | number;
}

export interface AreaPointMyTownResponse extends CommonResponse {
  result: {
    apiId: number;
    apiType: string;
    apiDepth: number;
    areaName: string;
    areaFullName: string;
    multiPolygonStr: MultiPolygon;
  };
}
