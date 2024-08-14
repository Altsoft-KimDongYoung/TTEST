/** @COMMON 알림설정 리스트 */
export interface NotificationSetting {
  key: SettingKey;
  title: string;
  description: string;
}

/** @COMMON 알림설정 리스트에 대한 각각의 key */
export type SettingKey =
  | 'isGlobalNotify'
  | 'isContentRegisterNotify'
  | 'isContentReplyLikeNotify'
  | 'isContentLikeNotify'
  | 'isContentReplyRegisterNotify'
  | 'isLocalboxSubscribeNotify'
  | 'isContentPosingNotify'
  | 'isContentBlindNotify';

/** @COMMON 알림설정 권한 DTO */
export interface NotificationSettingsDTO {
  isGlobalNotify: boolean;
  isContentRegisterNotify: boolean;
  isContentReplyLikeNotify: boolean;
  isContentLikeNotify?: boolean;
  isContentReplyRegisterNotify?: boolean;
  isLocalboxSubscribeNotify?: boolean;
  isContentPosingNotify?: boolean;
  isContentBlindNotify?: boolean;
}

/** @ResponseBody 내 알림 권한 설정 정보 조회  */
export interface NotificationPermissionResponse
  extends NotificationSettingsDTO {
  createDt: string;
  updateDt: string;
}

/** @RequestBody 내 알림 권한 설정 정보 수정 */
export type NotificationPermissionBody = Partial<NotificationSettingsDTO>;
