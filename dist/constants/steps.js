"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STEPS = exports.COMMON_STEPS = void 0;
exports.COMMON_STEPS = {
    AUTH: {
        SIGNUP_COMMON: [
            'terms',
            'phone-auth-request',
            'phone-auth-confirm',
            'email-auth',
            'location',
            'localbox',
        ],
        FIND_ACCOUNT_MOBILE_COMMON: ['mobile-input', 'mobile-auth', 'complete'],
        FIND_ACCOUNT_EMAIL_COMMON: ['email-input', 'email-auth', 'complete'],
        FIND_PASSWORD_MOBILE_COMMON: [
            'mobile-input',
            'mobile-auth',
            'change-password',
            'complete',
        ],
        FIND_PASSWORD_EMAIL_COMMON: [
            'email-input',
            'email-auth',
            'change-password',
            'complete',
        ],
    },
    MY: {
        PROFILE_COMMON: [
            'info',
            'nickname-edit',
            'phoneNumber-auth',
            'phoneNumber-edit',
            'password-auth',
            'password-edit',
            'email-edit',
            'email-auth',
        ],
    },
    VILLAGES: {
        CONTENT_COMMON: ['expose', 'form', 'complete'],
    },
    RESIDENTS: {
        SIGNAGE_EDITOR_COMMON: ['crop', 'edit', 'complete'],
        MOBILE_CONTENT_COMMON: ['mobile_form', 'complete'],
        SIGNAGE_CONTENT_COMMON: ['signage_form'],
        MIXED_CONTENT_COMMON: ['mix_mobile_form', 'mix_signage_form'],
    },
    ADS: {
        SIGNAGE_EDITOR_COMMON: ['crop', 'edit', 'complete'],
        MOBILE_CONTENT_COMMON: ['mobile_form', 'complete'],
        SIGNAGE_CONTENT_COMMON: ['signage_form'],
        MIXED_CONTENT_COMMON: ['mix_mobile_form', 'mix_signage_form'],
    },
};
exports.STEPS = {
    AUTH: {
        SIGNUP_MEMBER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.AUTH.SIGNUP_COMMON, true), ['complete'], false),
        SIGNUP_BUSINESS: __spreadArray(__spreadArray([], exports.COMMON_STEPS.AUTH.SIGNUP_COMMON, true), [
            'business-info',
            'business-address',
            'approving',
        ], false),
        SIGNUP_APARTMENT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.AUTH.SIGNUP_COMMON, true), ['apartment-info', 'approving'], false),
        SIGNUP_GVMT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.AUTH.SIGNUP_COMMON, true), ['gvmt-info', 'approving'], false),
        SIGNUP_LOCAL_NEWSPAPER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.AUTH.SIGNUP_COMMON, true), [
            'localNewspaper-info',
            'localNewspaper-address',
            'approving',
        ], false),
        FIND_ACCOUNT_MOBILE: __spreadArray([], exports.COMMON_STEPS.AUTH.FIND_ACCOUNT_MOBILE_COMMON, true),
        FIND_ACCOUNT_EMAIL: __spreadArray([], exports.COMMON_STEPS.AUTH.FIND_ACCOUNT_EMAIL_COMMON, true),
        FIND_PASSWORD_MOBILE: __spreadArray([], exports.COMMON_STEPS.AUTH.FIND_PASSWORD_MOBILE_COMMON, true),
        FIND_PASSWORD_EMAIL: __spreadArray([], exports.COMMON_STEPS.AUTH.FIND_PASSWORD_EMAIL_COMMON, true),
    },
    MY: {
        PROFILE_MEMBER: __spreadArray([], exports.COMMON_STEPS.MY.PROFILE_COMMON, true),
        PROFILE_BUSINESS: __spreadArray([], exports.COMMON_STEPS.MY.PROFILE_COMMON, true),
        PROFILE_APARTMENT: __spreadArray([], exports.COMMON_STEPS.MY.PROFILE_COMMON, true),
        PROFILE_GVMT: __spreadArray([], exports.COMMON_STEPS.MY.PROFILE_COMMON, true),
        PROFILE_LOCAL_NEWSPAPER: __spreadArray([], exports.COMMON_STEPS.MY.PROFILE_COMMON, true),
        WITHDRAW: ['warning', 'feedback'],
        QR_CERTIFY: ['certify-info', 'qr-scan'],
        SUB_CONTENT_INSERT: ['paste', 'select-content', 'display-time'],
    },
    VILLAGES: {
        CONTENT_REGISTER: __spreadArray([], exports.COMMON_STEPS.VILLAGES.CONTENT_COMMON, true),
        CONTENT_EDIT: __spreadArray([], exports.COMMON_STEPS.VILLAGES.CONTENT_COMMON, true),
    },
    RESIDENTS: {
        MOBILE_REGISTER: __spreadArray([], exports.COMMON_STEPS.RESIDENTS.MOBILE_CONTENT_COMMON, true),
        SIGNAGE_REGISTER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_CONTENT_COMMON, true), exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        MIXED_REGISTER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.RESIDENTS.MIXED_CONTENT_COMMON, true), exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        MOBILE_EDIT: __spreadArray([], exports.COMMON_STEPS.RESIDENTS.MOBILE_CONTENT_COMMON, true),
        SIGNAGE_EDIT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_CONTENT_COMMON, true), exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        MIXED_EDIT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.RESIDENTS.MIXED_CONTENT_COMMON, true), exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        MAIN_ADD_REGISTER: __spreadArray([
            'init_setting',
            'main_Form'
        ], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        SIGNAGE_ADD_REGISTER: __spreadArray([
            'init_setting',
            'signage_Form'
        ], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
    },
    ADS: {
        MOBILE_REGISTER: __spreadArray([], exports.COMMON_STEPS.ADS.MOBILE_CONTENT_COMMON, true),
        SIGNAGE_REGISTER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.ADS.SIGNAGE_CONTENT_COMMON, true), exports.COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON, true),
        MIXED_REGISTER: __spreadArray(__spreadArray([], exports.COMMON_STEPS.ADS.MIXED_CONTENT_COMMON, true), exports.COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON, true),
        MOBILE_EDIT: __spreadArray([], exports.COMMON_STEPS.ADS.MOBILE_CONTENT_COMMON, true),
        SIGNAGE_EDIT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.ADS.SIGNAGE_CONTENT_COMMON, true), exports.COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON, true),
        MIXED_EDIT: __spreadArray(__spreadArray([], exports.COMMON_STEPS.ADS.MIXED_CONTENT_COMMON, true), exports.COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON, true),
        MAIN_ADD_REGISTER: __spreadArray(['main_Form'], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
        SIGNAGE_ADD_REGISTER: __spreadArray([
            'init_setting',
            'signage_form'
        ], exports.COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON, true),
    },
};
