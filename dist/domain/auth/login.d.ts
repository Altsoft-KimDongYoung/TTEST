import { LocalboxCreatorType, UserRoles } from '@/types/common';
/** @RequestBody 로그인 */
export interface LoginBody {
    loginId: string;
    password: string;
    fcmToken?: string;
}
/** @Response 로그인 */
export interface LoginResponse {
    id: number;
    loginId: string;
    localboxCreatorType: LocalboxCreatorType;
    tokenType: 'BEARER';
    jwt: string;
    refreshToken: string;
    localboxId: number;
    myTownLatiY: number;
    myTownLongiX: number;
    roles: UserRoles[];
}
