export type Residents = 'residents';

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
