/** @RequestParams 내 동네 영역 조회(Point)*/
export interface AreaPointMyTownParams {
  latiY: string | number;
  longiX: string | number;
}

/** @RequestParams 내 동네 영역 조회 (OrganizationId)*/
export interface OrganizationMyTownParams {
  ohId: string | number;
}

/** @Response 내 동네 영역 조회 */
export interface AreaPointMyTownResponse {
  apiId: number;
  apiType: string;
  apiDepth: number;
  areaName: string;
  areaFullName: string;
  multiPolygonStr: string;
}
