import * as yup from 'yup';
export declare const createFindAccountSchema: () => yup.ObjectSchema<{
    name: string;
}, yup.AnyObject, {
    name: undefined;
}, "">;
export declare const FIND_ACCOUNT_MOBILE_SCHEMA: yup.ObjectSchema<{
    name: string;
    mobile: string;
}, yup.AnyObject, {
    name: undefined;
    mobile: undefined;
}, "">;
export declare const FIND_ACCOUNT_EMAIL_SCHEMA: yup.ObjectSchema<{
    name: string;
    email: string;
}, yup.AnyObject, {
    name: undefined;
    email: undefined;
}, "">;
export declare const FIND_PASSWORD_MOBILE_SHCEMA: yup.ObjectSchema<{
    loginId: string;
    mobile: string;
    password: string;
    passwordConfirm: string;
}, yup.AnyObject, {
    loginId: undefined;
    mobile: undefined;
    password: undefined;
    passwordConfirm: undefined;
}, "">;
export declare const FIND_PASSWORD_EMAIL_SCHEMA: yup.ObjectSchema<{
    loginId: string;
    email: string;
    password: string;
    passwordConfirm: string;
}, yup.AnyObject, {
    loginId: undefined;
    email: undefined;
    password: undefined;
    passwordConfirm: undefined;
}, "">;
