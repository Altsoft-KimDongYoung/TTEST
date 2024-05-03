import {
  LOCALBOX_CREATOR_TYPE,
  USER_TYPE,
  USER_TYPE_LABEL,
} from '@/constants/user';

import { ValueOf } from './common';

export type UserType = ValueOf<typeof USER_TYPE>;
export type UserTypeLabel = ValueOf<typeof USER_TYPE_LABEL>;
export type LocalboxCreatorType = ValueOf<typeof LOCALBOX_CREATOR_TYPE>;
