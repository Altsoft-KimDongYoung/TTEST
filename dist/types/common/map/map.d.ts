/// <reference types="@types/navermaps" />
import { MutableRefObject } from 'react';
export type NaverMap = naver.maps.Map;
export type NaverCircle = naver.maps.Circle;
export type NaverPolygon = naver.maps.Polygon;
export type NaverMarker = naver.maps.Marker;
export type MapOptions = naver.maps.MapOptions;
export type CircleOptions = naver.maps.CircleOptions;
export type PolygonOptions = naver.maps.PolygonOptions;
export type MarkerOptions = naver.maps.MarkerOptions;
export type Latitude = number;
export type Longitude = number;
export type Coordinate = [Latitude, Longitude];
export type Polygon = Coordinate[];
export type MultiPolygon = Polygon[];
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
