import * as yup from 'yup';
export declare const SINAGE_DEVICE_REGISTER_SCHEMA: yup.ObjectSchema<{
    managerName: string;
    managerMobile: string;
    managerEmail: string;
    visitAddr: string;
    deviceSerialNum: string;
    deviceName: string;
    askExplanation: string;
}, yup.AnyObject, {
    managerName: undefined;
    managerMobile: undefined;
    managerEmail: undefined;
    visitAddr: undefined;
    deviceSerialNum: undefined;
    deviceName: undefined;
    askExplanation: "";
}, "">;
export declare const SIGNAGE_PROJECT_REGISTER_SCHEMA: yup.ObjectSchema<{
    projectName: string;
    ratio: NonNullable<"HOR_16_9" | "VER_9_16" | undefined>;
    contentId: (number | undefined)[];
    displayTime: number;
}, yup.AnyObject, {
    projectName: undefined;
    ratio: undefined;
    contentId: "";
    displayTime: undefined;
}, "">;
export declare const SIGNAGE_PROJECT_EDIT_SCHEMA: yup.ObjectSchema<{
    projectName: string;
    contentId: (number | undefined)[];
    displayTime: number;
}, yup.AnyObject, {
    projectName: undefined;
    contentId: "";
    displayTime: undefined;
}, "">;
export declare const SIGNAGE_RESERVE_REGISTER_SCHEMA: yup.ObjectSchema<{
    projectId: number;
    reserveStartDt: string;
    reserveEndDt: string;
}, yup.AnyObject, {
    projectId: undefined;
    reserveStartDt: undefined;
    reserveEndDt: undefined;
}, "">;
export declare const SIGNAGE_RESERVE_EDIT_SCHEMA: yup.ObjectSchema<{
    projectId: number;
    reserveStartDt: string;
    reserveEndDt: string;
}, yup.AnyObject, {
    projectId: undefined;
    reserveStartDt: undefined;
    reserveEndDt: undefined;
}, "">;
export declare const SIGNAGE_PROJECT_COPY_SCHEMA: yup.ObjectSchema<{
    projectName: string;
    contentId: (number | undefined)[];
    displayTime: number;
    reserveStartDt: string;
    reserveEndDt: string;
}, yup.AnyObject, {
    projectName: undefined;
    contentId: "";
    displayTime: undefined;
    reserveStartDt: undefined;
    reserveEndDt: undefined;
}, "">;
