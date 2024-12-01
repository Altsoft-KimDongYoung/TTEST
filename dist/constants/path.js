"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATH = void 0;
exports.PATH = {
    ROOT: '/',
    NOT_FOUND: '/not-found',
    VILLAGES: {
        ROOT: '/villages',
        REGISTER: '/villages/register',
        DETAIL: function (slug) { return "/villages/detail/".concat(slug); },
        EDIT: function (slug) { return "/villages/edit/".concat(slug); },
    },
    RESIDENTS: {
        ROOT: '/residents',
        REGISTER: {
            ROOT: '/residents/register',
            MOBILE: '/residents/register/mobile',
            SIGNAGE: '/residents/register/signage',
            MIXED: '/residents/register/mixed',
        },
        ADD_REGISTER: function (subContentType, contentId) {
            return "/residents/add-register/".concat(subContentType, "/").concat(contentId);
        },
        DETAIL: function (slug) { return "/residents/detail/".concat(slug); },
        EDIT: function (slug) { return "/residents/edit/".concat(slug); },
    },
    ADS: {
        REGISTER: {
            ROOT: '/ads/register',
            MOBILE: '/ads/register/mobile',
            SIGNAGE: '/ads/register/signage',
            MIXED: '/ads/register/mixed',
        },
        ADD_REGISTER: function (subContentType, contentId) {
            return "/ads/add-register/".concat(subContentType, "/").concat(contentId);
        },
        DETAIL: function (slug) { return "/ads/detail/".concat(slug); },
        EDIT: function (slug) { return "/ads/edit/".concat(slug); },
    },
    AUTH: {
        LOGIN: '/auth/login',
        SIGNUP: {
            ROOT: '/auth/signup',
            MEMBER: '/auth/signup/member',
            BUSINESS: '/auth/signup/business',
            APARTMENT: '/auth/signup/apartment',
            GVMT: '/auth/signup/gvmt',
            LOCAL_NEWSPAPER: '/auth/signup/localNewspaper',
        },
        FIND_ACCOUNT: {
            ROOT: '/auth/find-account',
            MOBILE: '/auth/find-account/mobile',
            EMAIL: '/auth/find-account/email',
        },
        FIND_PASSWORD: {
            ROOT: '/auth/find-password',
            MOBILE: '/auth/find-password/mobile',
            EMAIL: '/auth/find-password/email',
        },
        BLACK_LIST: '/auth/black-list',
    },
    MY: {
        ROOT: '/my',
        LIST: '/my/list',
        PROFILE: function (user) { return "/my/profile/".concat(user); },
        VILLAGES_SETTINGS: '/my/villages-settings',
        SETTINGS: {
            ROOT: '/my/settings',
            TERMS: {
                ROOT: '/my/settings/terms',
                SERVICE: '/my/settings/terms/service',
                PRIVACY: '/my/settings/terms/privacy',
                MARKETING: '/my/settings/terms/marketing',
                LOCATION: '/my/settings/terms/location',
            },
            LICENSE: '/my/settings/license',
            NOTIFICATION: '/my/settings/notification',
            WITHDRAW: '/my/settings/withdraw',
        },
        SIGNAGE_APP: {
            CODE: '/my/signage-app/code',
        },
        RESIDENT_CERTIFICATION: {
            ROOT: '/my/residentCertification',
            QR_SCAN: '/my/residentCertification/certify',
            LOCATION_REGISTER: '/my/residentCertification/location-register',
        },
        PAYMENT: "/my/payment",
        CONTENTBOX: "/my/contentbox",
    },
    SEARCH: '/search',
    LOCALBOX: {
        LIST: '/localbox/list',
        CONTENT_INSERT: function (contentId) { return "/localbox/list/insert/".concat(contentId); },
        CONTENT_REMOVE: function (contentId) { return "/localbox/list/remove/".concat(contentId); },
        DETAIL: function (localboxId) { return "/localbox/detail/".concat(localboxId); },
        EDIT: "/localbox/edit",
        MENU: function (localboxId) { return "localbox/menu/".concat(localboxId); },
        MAP: function (localboxId) { return "/localbox/map/".concat(localboxId); },
        NAVIGATE_NAVER_MAP: function (address) { return "https://map.naver.com/p/search/".concat(address); },
    },
    NEWS: {
        ROOT: '/news',
        ROOT_TAB: function (tab) { return "/news?tab=".concat(tab); },
        NOTIFICATION: {
            BLIND_APPLIED: function (notificationId) {
                return "/news/notification/blind-applied/".concat(notificationId);
            },
            BLIND_REMOVED: function (refId) { return "/news/notification/blind-remove/".concat(refId); },
        },
        NOTICE: {
            DETAIL: function (noticeId) { return "/news/notice/detail/".concat(noticeId); },
        },
    },
    SEARCH_KEYWORD: function (keyword) { return "/search?keyword=".concat(keyword); },
    SIGNAGES: {
        SIGNAGE: {
            ROOT: '/signages/signage',
            ROOT_GROUP: "/signages/signage?signageSubTab=group",
            ROOT_NO_GROUP: "/signages/signage?signageSubTab=noGroup",
            MANUAL: '/signages/signage/manual',
            GUIDE: '/signages/signage/guide',
            PURCHASE: 'https://smartstore.naver.com/camel/products/729149942',
            REGISTER: '/signages/signage/register',
            REGISTER_COMPLETE: '/signages/signage/registerComplete',
            EDIT: function (deviceId, deviceName) {
                return "/signages/signage/edit/".concat(deviceId, "/").concat(deviceName);
            },
            GROUP_REGISTER: {
                ROOT: '/signages/signage/group-register',
                EDIT: function (slug) { return "/signages/signage/group-register/edit/".concat(slug); },
                HISTORY: '/signages/signage/group-register-history',
            },
            GROUP_EDIT: function (slug) { return "/signages/signage/group-detail/".concat(slug); },
            GROUP_DETAIL: function (slug, groupName) {
                return "/signages/signage/group-detail/".concat(slug, "/").concat(groupName);
            },
            PAYMENT: {
                ROOT: function (slug) { return "/signages/signage/payment/".concat(slug); },
                PENDING_PAYMENT: '/signages/signage/payment/pending-payment',
                COMPLETE: function (query) {
                    return "/signages/signage/payment/complete?deviceSumCount=".concat(query === null || query === void 0 ? void 0 : query.deviceSumCount, "&nextPaymentDateTime=").concat(query === null || query === void 0 ? void 0 : query.nextPaymentDateTime, "&paymentAmount=").concat(query === null || query === void 0 ? void 0 : query.paymentAmount);
                },
                CANCEL: function (slug) { return "/signages/signage/payment/cancel/".concat(slug); },
            },
            CANCEL: '/signages/signage/cancel',
        },
        PROJECT: {
            ROOT: '/signages/signage?tab=project',
            REGISTER: '/signages/project/register',
            EDIT: function (slug) { return "/signages/project/edit/".concat(slug); },
            DETAIL: function (slug) { return "/signages/project/".concat(slug); },
            PREVIEW: function (slug) { return "/signages/project/preview/".concat(slug); },
        },
        RESERVE: {
            REGISTER: function (groupId, ratioType) {
                return "/signages/reserve/register/".concat(groupId, "/").concat(ratioType);
            },
            EDIT: function (reservationId, projectId, ratioType, groupId) { return "/signages/reserve/edit/".concat(reservationId, "/").concat(projectId, "}/").concat(ratioType, "/").concat(groupId); },
            COPY: function (projectId, groupId) {
                return "/signages/reserve/copy/".concat(projectId, "/").concat(groupId);
            },
            DETAIL: function (groupId, ratioType) {
                return "/signages/reserve/detail/".concat(groupId, "/").concat(ratioType);
            },
        },
    },
};
