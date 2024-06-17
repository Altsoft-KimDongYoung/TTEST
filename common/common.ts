export type KeyOf<T> = Extract<keyof T, string>;
export type ValueOf<T> = T[KeyOf<T>];
export type NonEmptyArray<T> = readonly [T, ...T[]];
export type keyType = string | number | symbol;
export type Many<T> = T | NonEmptyArray<T>;

export type RequiredWith<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type IndexSignature<T extends string | number | symbol, U> = {
  [key in T]: U;
};

export interface KeyLabel<T, V extends string = string> {
  key: T;
  label: V;
}

export interface Slug {
  slug: number;
}

export interface Pagenation {
  page?: number;
  size?: number;
}

export type ApiResponseSuccess<T> = {
  message: string;
  result: T;
};

export type ApiResponseFailed = {
  returnCode: string;
  description: string;
};

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
/** @TYPE 사이니지 기기 비율 타입 */
export type DeviceRatio = 'HOR_16_9' | 'VER_9_16';
export type NullableDeviceRatio = DeviceRatio | null;
