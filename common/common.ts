export type KeyOf<T> = Extract<keyof T, string>;
export type ValueOf<T> = T[KeyOf<T>];
export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface Slug {
  slug: number;
}

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
