import {
  LOCALBOX_CREATOR_TYPE,
  USER_ROLES,
  USER_TYPE,
  USER_TYPE_LABEL,
} from '@/constants/user';

import { ValueOf } from '../common';

export type UserType = ValueOf<typeof USER_TYPE>;
export type UserTypeLabel = ValueOf<typeof USER_TYPE_LABEL>;
export type LocalboxCreatorType = ValueOf<typeof LOCALBOX_CREATOR_TYPE>;
export type UserRoles = ValueOf<typeof USER_ROLES>;

export interface UserModel {
  userId: number;
  loginId: string;
  accessToken: string;
  refreshToken: string;
  localboxCreatorType: LocalboxCreatorType;
  localboxId: number;
  roles: UserRoles[];
  myTownLatiY: number;
  myTownLongiX: number;
}
