/** @RequestBody 사이니지 프로젝트 예약 등록에 사용되는 바디 */
export interface RegisterReserveRequestBody {
  groupId: number;
  projectId: number;
  reserveStartDt: string;
  reserveEndDt: string;
}

/** @RequestParams 사이니지 프로젝트 예약 목록 데이터를 가져오는데 사용되는 파라미터 */
export interface ReservationListParams {
  groupId: number;
  conditionMonthDt?: string;
}

/** @Response 사이니지 프로젝트 예약 목록 응답 */
export interface ReservationListResponse {
  signageGroupId: number;
  signageGroupName: string;
  signageReservationDateDtoList: SignageReservationDateDto[];
}

/** @DTO 사이니지 프로젝트 예약 기간 */
export interface SignageReservationDateDto {
  signageReservationId: number;
  signageReserveStartDt: string;
  signageReserveEndDt: string;
}

/** @TYPE 사이니지 예약을 할 수 없는 날짜 */
export interface DisableDate {
  date: Date;
  message: string;
}
