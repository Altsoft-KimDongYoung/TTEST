import * as yup from 'yup';
export declare const createMobileSchema: () => yup.ObjectSchema<{
    title: string;
    body: string;
    bodyText: string;
}, yup.AnyObject, {
    title: undefined;
    body: undefined;
    bodyText: undefined;
}, "">;
export declare const createSignageSchema: () => yup.ObjectSchema<{
    title: string;
    summary: string;
}, yup.AnyObject, {
    title: undefined;
    summary: undefined;
}, "">;
export declare const MOBILE_CONTENT_SCHEMA: yup.ObjectSchema<{
    title: string;
    body: string;
    bodyText: string;
}, yup.AnyObject, {
    title: undefined;
    body: undefined;
    bodyText: undefined;
}, "">;
export declare const SIGNAGE_CONTENT_SCHEMA: yup.ObjectSchema<{
    title: string;
    summary: string;
}, yup.AnyObject, {
    title: undefined;
    summary: undefined;
}, "">;
export declare const MIXED_CONTENT_SCHEMA: yup.ObjectSchema<{
    title: string;
    body: string;
    bodyText: string;
    summary: string;
}, yup.AnyObject, {
    title: undefined;
    body: undefined;
    bodyText: undefined;
    summary: undefined;
}, "">;
