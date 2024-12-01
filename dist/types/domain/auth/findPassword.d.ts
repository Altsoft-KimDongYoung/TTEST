/** @RequestParams 비밀번호 변경 */
export interface ResetPasswordParams {
    loginId: string;
    mobile: string;
    email: string;
}
/** @RequestBody 비밀번호 변경 */
export interface ResetPasswordBody {
    mobile: string;
    email: string;
    password: string;
}
