/** @Request 토큰 재발급 */
export interface RenewRefreshTokenBody {
    userId: number;
    refreshToken: string;
    fcmToken: string;
}
/** @Response 토큰 재발급 */
export interface RenewRefreshTokenResponse {
    jwt: string;
    refreshToken: string;
}
/** @ResponseBody 로그아웃 */
export interface LogoutBody {
    userId: number;
    refreshToken: string;
    fcmToken: string;
}
