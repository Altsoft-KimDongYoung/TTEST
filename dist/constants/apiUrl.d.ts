export declare const API_URL: {
    readonly AUTH: {
        readonly LOGIN: "auth/login";
        readonly LOGOUT: "auth/logout";
        readonly REFRESH_TOKEN: "auth/refresh-token";
    };
    readonly USER: {
        readonly SEND_JOIN_MOBILE: "user/send-join-mobile";
        readonly SEND_JOIN_EMAIL: "user/send-join-email";
        readonly SEND_SMS_FOR_FIND_LOGIN_ID: "user/send-sms-for-find-login-id";
        readonly SEND_MAIL_FOR_FIND_LOGIN_ID: "user/send-mail-for-find-login-id";
        readonly SEND_SMS_RESET_PASSWORD: "user/send-sms-reset-password";
        readonly SEND_MAIL_RESET_PASSWORD: "user/send-mail-reset-password";
        readonly SEND_SMS_CHANGE_MOBILE: "user/send-sms/change-mobile";
        readonly SEND_MAIL_CHANGE_EMAIL: "user/send-mail/change-email";
        readonly JOIN_CONFIRM_MOBILE: "user/join-confirm-mobile";
        readonly JOIN_CONFIRM_EMAIL: "user/join-confirm-email";
        readonly FIND_LOGIN_ID_VIA_SMS_PIN_CODE: "user/find-login-id-via-sms-pin-code";
        readonly FIND_LOGIN_ID_VIA_MAIL_PIN_CODE: "user/find-login-id-via-mail-pin-code";
        readonly CONFIRM_SMS_CODE_FOR_RESET_PASSWORD: "user/confirm-sms-code-for-reset-password";
        readonly CONFIRM_MAIL_CODE_FOR_RESET_PASSWORD: "user/confirm-mail-code-for-reset-password";
        readonly CONFIRM_SMS_CHANGE_MOBILE: "user/confirm-sms/change-mobile";
        readonly CONFIRM_EMAIL_CHANGE_EMAIL: "user/confirm-email/change-email";
        readonly RESET_PASSWORD_AT_MOBILE_CERTIFY: "user/reset-password-at-mobile-certify";
        readonly RESET_PASSWORD_AT_MAIL_CERTIFY: "user/reset-password-at-mail-certify";
        readonly SIGNUP: "user/signup";
        readonly CHECK_DUPLICATE_LOGIN_ID: "user/check-duplicate-login-id";
        readonly MY_PROFILE: "user/my-profile";
        readonly CHECK_PASSWORD: "user/check-password";
        readonly PASSWORD: "user/password";
        readonly WITHDRAWAL: "user/withdrawal";
        readonly RANDOM_NICKNAME: "user/random-nickname";
    };
    readonly AREA: {
        readonly POINT_MY_TOWN: "area/point/my-town";
        readonly ORGANIZATION_MY_TOWN: "area/organization/my-town";
    };
    readonly CONTENT: {
        readonly FILE: "content/file";
        readonly VILLAGE_NEWS: "content/village-news";
        readonly RESIDENT_NEWS: "content/resident-news";
        readonly AD: "content/ad";
        readonly DISPLAY_AREA: "content/display-area";
        readonly MAIN_VILLAGE: "content/main-village";
        readonly MAIN_RESIDENT: "content/main-resident";
        readonly LIKE: "content/like";
        readonly DISLIKE: "content/dislike";
        readonly BOOKMARK: "content/bookmark";
        readonly BOOKMARK_MY_LOCALBOX_PAGE: "content/bookmark/my-localbox-page";
        readonly DETAIL: (contentId: number) => string;
        readonly REPLY: {
            readonly BASE: "content/reply";
            readonly ITEM: (contentsReplyId: number) => string;
            readonly LIKE: "content/reply/like";
        };
        readonly COUNT: "content/count";
        readonly RECENT_SEARCH_KEYWORD: "content/recent-search-keyword";
        readonly UPDATABLE_DELETABLE: (contentId: number) => string;
        readonly TO_MIXED: {
            readonly SIGNAGE: "content/signage/to-mixed";
            readonly MOBILE: "content/mobile/to-mixed";
        };
        readonly POSTING: "content/posting";
        readonly POSTING_DELETE: (contentId: number) => string;
        readonly DISPLAY_YN: "content/display-yn";
    };
    readonly CONTENT_TEMP: {
        readonly BASE: "content-temp";
        readonly ITEM: (contentTempId: number) => string;
        readonly ITEMS: (contentTempIds: string | number) => string;
        readonly VILLAGE_NEWS: "content-temp/village-news";
        readonly RESIDENT_NEWS: "content-temp/resident-news";
        readonly AD: "content-temp/ad";
    };
    readonly SIGNAGES: {
        readonly SIGNAGE: {
            readonly DEVICE: {
                readonly SPEC: "signage/device/spec";
                readonly NAME_DUPLICATE_CHECK: "signage/device/check-name";
                readonly SERIAL_NUM_DUPLICATE_CHECK: "signage/device/check-serial-num";
                readonly REGISTER: "signage/device/approval";
                readonly APPROVED: "signage/device/approved-device";
                readonly DELETE: (deviceId: number) => string;
                readonly PATCH_NAME: "signage/device/name";
                readonly RENDER_TYPE_PAGE: "signage/device/approval/localbox/display-can-type";
            };
            readonly GROUP: {
                readonly PAID: "signage/group/approved-pay";
                readonly USE_REAPPLY_DEVICE_CAN_REGISTER: (groupId: number) => string;
                readonly REGISTER: "signage/group/approval";
                readonly APPLY_HISTORY: "signage/group/approval/apply-history";
                readonly NAME_DUPLICATE_CHECK: "signage/group/check-name";
                readonly RENDER_TYPE_PAGE: "signage/group/approved/localbox/display-can-type";
                readonly DETAIL: (groupId: number) => string;
                readonly DETAIL_INFO: (groupId: number) => string;
                readonly PATCH_NAME: "signage/group/name";
                readonly NOT_PAID: "signage/group/approved-not-pay";
                readonly DELETE_DECISION_IN_PROGRESS: (approvalId: number) => string;
                readonly DECISION_IN_PROGRESS_DETAIL: (approvalId: string) => string;
                readonly WILL_PAY_DETAIL: (groupIds: string[]) => string;
                readonly APPLY_PAY: "signage/group/apply-payment";
                readonly CANCEL_PAY_DETAIL: (groupId: string) => string;
                readonly CANCEL_PAY: (groupId: string) => string;
                readonly DELETE: (groupId: number) => string;
                readonly PATCH_DEFAULT_PROJECT: "signage/group/default-project";
            };
        };
        readonly PROJECT: {
            readonly LIST: "signage/project";
            readonly NAME_DUPLICATE_CHECK: "signage/project/check-name";
            readonly CONTENT_CAN_REGISTER: "content/project-can-reg";
            readonly SIGNAGE_CONTENT_PREVIEW: (contentId: string) => string;
            readonly REGISTER: "signage/project";
            readonly PAID_GROUP_COUNT: "signage/group/approved-pay/count";
            readonly DELETE: (projectId: number) => string;
            readonly LIST_OF_GROUP_EXECUTE_PROJECT: (projectId: number) => string;
            readonly DETAIL: (projectId: string) => string;
            readonly LIST_OF_CONTENT_BELONG_PROJECT: (projectId: number) => string;
            readonly IS_UNIQUE_CONTENT: (contentId: number) => string;
        };
        readonly RESERVE: {
            readonly REGISTER: "signage/reservation";
            readonly RESERVATION_DATE_LIST: "signage/reservation/day";
            readonly RESERVATION_LIST: "signage/reservation/project";
            readonly DETAIL: (reservationId: number) => string;
            readonly DELETE: (reservationId: number) => string;
            readonly EDIT: "signage/reservation";
            readonly COPY: "signage/project/copy";
        };
    };
    readonly LOCALBOX: {
        readonly DETAIL: (localboxId: number) => string;
        readonly MY: "localbox/my";
        readonly MY_TOWN: "localbox/my-town";
        readonly MY_CONTENT: "localbox/my-content";
        readonly YOUR_CONTENT: "localbox/your-content";
        readonly SUBSCRIPTION: "localbox-subscription"; /** ❌ 제거 예정 */
        readonly FOLLOW: "localbox-follow";
        readonly SUBSCRIPITION_MY: "localbox-subscription/my";
        readonly RECENT_VISIT_TOWN: "localbox/recent-visit-town";
        readonly RECENT_VISIT_TOWN_ID: (visitTownId: number) => string;
        readonly CHILD_ORGANIZATION: "localbox/child-organization";
        readonly SIGNAGE_PIN_CODE: "localbox/signage-pin-code";
        readonly CONTENT_BEOP_PERCENTAGE: (localboxId: number) => string;
        readonly TOP_GROUP_CONTENT: "localbox/top-group/content";
        readonly DELETE_TOP_GROUP_CONTENT: (contentId: number) => string;
        readonly TOP_GROUP_CONTENT_LIST: (localboxId: number) => string;
        readonly CHECK_BUSINESS: "localbox/check-business";
        readonly EXIST_ORGANIZATION_MANAGER: "localbox/exist/organization-manager";
        readonly INTRO: (targetLocalboxId: number) => string;
    };
    readonly ORGANIZATION: {
        readonly APARTMENT: "/organization/apartment";
        readonly GVMT: "/organization/government";
        readonly BANNER_CLICK: (bannerId: number) => string;
        readonly PARENT_HIERARCHY_LIST: "/organization/parent-hierarchy-list";
        readonly PARENT_HIERARCHY_LIST_ID: (organizationId: number) => string;
        readonly INMYTOWN_CERTIFY_ORGANIZATION: "organization/in-my-town/certify-organization";
        readonly REQUEST_JOIN: (organizationId?: number) => string;
        readonly REQUEST_JOIN_ADDRESS: "organization/req-join/address";
    };
    readonly BANNER: "banner";
    readonly BANNER_CLICK: (bannerId: number) => string;
    readonly COMPLAIN: {
        readonly CONTENT: "complain/content";
        readonly CONTENT_REPLY: "complain/content-reply";
        readonly CONTENT_LOCALITY: "complain/content-locality";
        readonly CAN_CONTENT_LOCALITY: (contentId: number) => string;
    };
    readonly NOTIFICATION: "notification";
    readonly NOTIFICATION_ID: (notificationId: number) => string;
    readonly NOTIFICATION_PERMISSION: "notification/permission";
    readonly NOTICE: "notice";
    readonly NOTICE_ID: (noticeId: number) => string;
    readonly QR: {
        readonly MANAGEMENT_CERTIFY_TYPE: "qr/management-certify-type";
        readonly MANAGEMENT_CERTIFY_TYPE_ID: (localboxId: number) => string;
        readonly MY_CERTIFY: "qr/my-certify";
        readonly MANAGEMENT_CERTIFY_IMAGE: "qr/manage-certify-image";
        readonly MANAGEMENT_CERTIFY_IMAGE_ID: (localboxId: number) => string;
        readonly CERTIFY_JUMIN: "qr/certify-jumin";
        readonly CERTIFY_JUMIN_CERTIFY_ID: (certifyId: number) => string;
        readonly CAN_CERTIFT_JUMIN: "qr/can/certify-jumin";
        readonly EXIST_CERTIFY_JUMIN: "qr/exist/certify-jumin";
    };
    readonly MY: {
        readonly CONTENT_BOX: {
            readonly LIST: "localbox/locker";
        };
        readonly PAYMENT: {
            readonly REGISTER: "payment/info";
            readonly CARD_LIST: "payment/info";
            readonly HISTORY: "payment/history";
            readonly DELETE: (paymentId: number) => string;
        };
    };
};
