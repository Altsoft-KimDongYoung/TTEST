import { DeviceRatio, User } from '@/types/common';
import { NewsTabs, WillPayReciptInfo } from '@/types/domain';
export declare const PATH: {
    readonly ROOT: "/";
    readonly NOT_FOUND: "/not-found";
    readonly VILLAGES: {
        readonly ROOT: "/villages";
        readonly REGISTER: "/villages/register";
        readonly DETAIL: (slug: number) => string;
        readonly EDIT: (slug: number) => string;
    };
    readonly RESIDENTS: {
        readonly ROOT: "/residents";
        readonly REGISTER: {
            readonly ROOT: "/residents/register";
            readonly MOBILE: "/residents/register/mobile";
            readonly SIGNAGE: "/residents/register/signage";
            readonly MIXED: "/residents/register/mixed";
        };
        readonly ADD_REGISTER: (subContentType: string, contentId: number) => string;
        readonly DETAIL: (slug: number) => string;
        readonly EDIT: (slug: number) => string;
    };
    readonly ADS: {
        readonly REGISTER: {
            readonly ROOT: "/ads/register";
            readonly MOBILE: "/ads/register/mobile";
            readonly SIGNAGE: "/ads/register/signage";
            readonly MIXED: "/ads/register/mixed";
        };
        readonly ADD_REGISTER: (subContentType: string, contentId: number) => string;
        readonly DETAIL: (slug: number) => string;
        readonly EDIT: (slug: number) => string;
    };
    readonly AUTH: {
        readonly LOGIN: "/auth/login";
        readonly SIGNUP: {
            readonly ROOT: "/auth/signup";
            readonly MEMBER: "/auth/signup/member";
            readonly BUSINESS: "/auth/signup/business";
            readonly APARTMENT: "/auth/signup/apartment";
            readonly GVMT: "/auth/signup/gvmt";
            readonly LOCAL_NEWSPAPER: "/auth/signup/localNewspaper";
        };
        readonly FIND_ACCOUNT: {
            readonly ROOT: "/auth/find-account";
            readonly MOBILE: "/auth/find-account/mobile";
            readonly EMAIL: "/auth/find-account/email";
        };
        readonly FIND_PASSWORD: {
            readonly ROOT: "/auth/find-password";
            readonly MOBILE: "/auth/find-password/mobile";
            readonly EMAIL: "/auth/find-password/email";
        };
        readonly BLACK_LIST: "/auth/black-list";
    };
    readonly MY: {
        readonly ROOT: "/my";
        readonly LIST: "/my/list";
        readonly PROFILE: (user?: User) => string;
        readonly VILLAGES_SETTINGS: "/my/villages-settings";
        readonly SETTINGS: {
            readonly ROOT: "/my/settings";
            readonly TERMS: {
                readonly ROOT: "/my/settings/terms";
                readonly SERVICE: "/my/settings/terms/service";
                readonly PRIVACY: "/my/settings/terms/privacy";
                readonly MARKETING: "/my/settings/terms/marketing";
                readonly LOCATION: "/my/settings/terms/location";
            };
            readonly LICENSE: "/my/settings/license";
            readonly NOTIFICATION: "/my/settings/notification";
            readonly WITHDRAW: "/my/settings/withdraw";
        };
        readonly SIGNAGE_APP: {
            readonly CODE: "/my/signage-app/code";
        };
        readonly RESIDENT_CERTIFICATION: {
            readonly ROOT: "/my/residentCertification";
            readonly QR_SCAN: "/my/residentCertification/certify";
            readonly LOCATION_REGISTER: "/my/residentCertification/location-register";
        };
        readonly PAYMENT: "/my/payment";
        readonly CONTENTBOX: "/my/contentbox";
    };
    readonly SEARCH: "/search";
    readonly LOCALBOX: {
        readonly LIST: "/localbox/list";
        readonly CONTENT_INSERT: (contentId: number) => string;
        readonly CONTENT_REMOVE: (contentId: number) => string;
        readonly DETAIL: (localboxId: number) => string;
        readonly EDIT: "/localbox/edit";
        readonly MENU: (localboxId: number) => string;
        readonly MAP: (localboxId: number) => string;
        readonly NAVIGATE_NAVER_MAP: (address: string) => string;
    };
    readonly NEWS: {
        readonly ROOT: "/news";
        readonly ROOT_TAB: (tab: NewsTabs) => string;
        readonly NOTIFICATION: {
            readonly BLIND_APPLIED: (notificationId: number) => string;
            readonly BLIND_REMOVED: (refId: number) => string;
        };
        readonly NOTICE: {
            readonly DETAIL: (noticeId: number) => string;
        };
    };
    readonly SEARCH_KEYWORD: (keyword: string) => string;
    readonly SIGNAGES: {
        readonly SIGNAGE: {
            readonly ROOT: "/signages/signage";
            readonly ROOT_GROUP: "/signages/signage?signageSubTab=group";
            readonly ROOT_NO_GROUP: "/signages/signage?signageSubTab=noGroup";
            readonly MANUAL: "/signages/signage/manual";
            readonly GUIDE: "/signages/signage/guide";
            readonly PURCHASE: "https://smartstore.naver.com/camel/products/729149942";
            readonly REGISTER: "/signages/signage/register";
            readonly REGISTER_COMPLETE: "/signages/signage/registerComplete";
            readonly EDIT: (deviceId: number, deviceName: string) => string;
            readonly GROUP_REGISTER: {
                readonly ROOT: "/signages/signage/group-register";
                readonly EDIT: (slug: number) => string;
                readonly HISTORY: "/signages/signage/group-register-history";
            };
            readonly GROUP_EDIT: (slug: number) => string;
            readonly GROUP_DETAIL: (slug: number, groupName: string) => string;
            readonly PAYMENT: {
                readonly ROOT: (slug: number) => string;
                readonly PENDING_PAYMENT: "/signages/signage/payment/pending-payment";
                readonly COMPLETE: (query?: WillPayReciptInfo) => string;
                readonly CANCEL: (slug: number) => string;
            };
            readonly CANCEL: "/signages/signage/cancel";
        };
        readonly PROJECT: {
            readonly ROOT: "/signages/signage?tab=project";
            readonly REGISTER: "/signages/project/register";
            readonly EDIT: (slug: number) => string;
            readonly DETAIL: (slug: number) => string;
            readonly PREVIEW: (slug: number) => string;
        };
        readonly RESERVE: {
            readonly REGISTER: (groupId: number, ratioType: DeviceRatio) => string;
            readonly EDIT: (reservationId?: number, projectId?: number, ratioType?: DeviceRatio, groupId?: number) => string;
            readonly COPY: (projectId: number, groupId: number) => string;
            readonly DETAIL: (groupId: number, ratioType: DeviceRatio) => string;
        };
    };
};
