import * as yup from 'yup';
export declare const createSignupSchema: () => yup.ObjectSchema<{
    name: string;
    mobile: string;
    nickname: string;
    loginId: string;
    password: string;
    passwordConfirm: string;
}, yup.AnyObject, {
    name: undefined;
    mobile: undefined;
    nickname: undefined;
    loginId: undefined;
    password: undefined;
    passwordConfirm: undefined;
}, "">;
export declare const SIGNUP_MEMBER_SCHEMA: yup.ObjectSchema<{
    name: string;
    mobile: string;
    nickname: string;
    loginId: string;
    password: string;
    passwordConfirm: string;
    email: string | undefined;
}, yup.AnyObject, {
    name: undefined;
    mobile: undefined;
    nickname: undefined;
    loginId: undefined;
    password: undefined;
    passwordConfirm: undefined;
    email: undefined;
}, "">;
export declare const SIGNUP_BUSINESS_SCHEMA: yup.AnyObjectSchema;
export declare const SIGNUP_APARTMENT_SCHEMA: yup.AnyObjectSchema;
export declare const SIGNUP_GVMT_SCHEMA: yup.AnyObjectSchema;
export declare const SIGNUP_LOCAL_NEWSPAPER_SCHEMA: yup.AnyObjectSchema;
