/// <reference types="@types/navermaps" />

/*
 * @types/navermaps 에서 제공하는 타입들을 다시 재정의
 * NaverMap: 지도 주체
 * NaverCircle: 지도 내부의 원 (콘텐츠 노출 영역)
 * NaverPolygon: 지도 내부의 폴리곤 영역 (내가 설정한 동네 지역)
 */
import { MutableRefObject } from 'react';

export type NaverMap = naver.maps.Map;
export type NaverCircle = naver.maps.Circle;
export type NaverPolygon = naver.maps.Polygon;
export type NaverMarker = naver.maps.Marker;
export type MapOptions = naver.maps.MapOptions;
export type CircleOptions = naver.maps.CircleOptions;
export type PolygonOptions = naver.maps.PolygonOptions;
export type MarkerOptions = naver.maps.MarkerOptions;
/*
 * Latitude: 위도 (y 좌표)
 * Longitude: 경도 (x 좌표)
 * Coordinate: 좌표 (위도와 경도의 조합-> 배열)
 * Polygon: 좌표들 (좌표를 배열로 한번 더 감쌈)
 * MultiPolygon: 좌표들의 3차원 배열 형태
 */
export type Latitude = number;
export type Longitude = number;
export type Coordinate = [Latitude, Longitude];
export type Polygon = Coordinate[];
export type MultiPolygon = Polygon[];

/*
 * ContentExposedArea: 콘텐츠 노출 지역(지름 기준)
 * CircleRadius: 반지름
 */
export type ContentExposedArea = '2km' | '10km';
export type CircleRadius = 1000 | 5000;

export interface MapInstanceRefs {
  map: MutableRefObject<NaverMap | undefined>;
  polygon: MutableRefObject<NaverPolygon | undefined>;
  circle?: MutableRefObject<NaverCircle | undefined>;
  marker?: MutableRefObject<NaverMarker | undefined>;
}

export interface RangeSlide {
  range: ContentExposedArea;
  value: number[];
}
export interface RadiusOption {
  label: ContentExposedArea;
  value: number;
}

export interface DrawMapProps {
  position: Coordinate;
  mapOptions?: MapOptions;
  mapId?: string;
}

export interface DrawCircleProps {
  map: NaverMap;
  position: Coordinate;
  radius?: CircleRadius;
  circleOptions?: CircleOptions;
}

export interface DrawPolygonProps {
  map: NaverMap;
  multiPolygon: MultiPolygon;
  polygonOptions?: PolygonOptions;
}

export interface DrawMarkerProps {
  map: NaverMap;
  position: Coordinate;
  markerOptions?: MarkerOptions;
  image?: 'localbox' | 'currentPosition';
  size?: number;
}
