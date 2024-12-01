/**
 * TODO: 다른 도메인에서 아래 상태값들을 사용할 필요가 없는 경우,
 * 삭제가 필요합니다.
 * -> 로그인/회원가입/회원 정보 페이지 구현시 학인 예정입니다.
 */
export declare const SIGNUP_APPROVAL_STATUS: {
    readonly WAITING: "waiting";
    readonly REJECT: "reject";
    readonly BLACKLIST: "blacklist";
};
/**
 * TODO: 다른 도메인에서 아래 상태값들을 사용할 필요가 없는 경우,
 * 삭제가 필요합니다.
 * -> 로그인/회원가입/회원 정보 페이지 구현시 학인 예정입니다.
 */
export declare const SIGNUP_APPROVAL_STATUS_LABEL: {
    readonly WAITING: "승인 대기";
    readonly REJECT: "반려";
    readonly BLACKLIST: "이용중지";
};
export declare const WITHDRAWAL_REASONS: {
    readonly PURPOSE_DELETE_PRIVACY_INFO: {
        readonly value: "PURPOSE_DELETE_PRIVACY_INFO";
        readonly label: "사생활 기록 삭제 목적";
    };
    readonly RESTRICTION_USE_DUE_SANCTIONS: {
        readonly value: "RESTRICTION_USE_DUE_SANCTIONS";
        readonly label: "제재조치로 이용제한됨";
    };
    readonly PRIVACY_INFO_CONCERNS: {
        readonly value: "PRIVACY_INFO_CONCERNS";
        readonly label: "개인정보 및 보안 우려";
    };
    readonly SERVICE_INCONVENIENCE: {
        readonly value: "SERVICE_INCONVENIENCE";
        readonly label: "서비스 기능 불편";
    };
    readonly SIMILAR_SERVICE_IN_THE_OTHER_BRANDS: {
        readonly value: "SIMILAR_SERVICE_IN_THE_OTHER_BRANDS";
        readonly label: "타브랜드의 유사서비스 이용";
    };
    readonly LACK_MEMBERSHIP_BENEFITS: {
        readonly value: "LACK_MEMBERSHIP_BENEFITS";
        readonly label: "회원 혜택 부족";
    };
    readonly DONT_KNOW_HOW_USE: {
        readonly value: "DONT_KNOW_HOW_USE";
        readonly label: "사용 방법을 모르겠음";
    };
    readonly OTHER: {
        readonly value: "OTHER";
        readonly label: "기타";
    };
};
export declare const PUSH_MESSAGE_STATUS: {
    readonly SIGNAGE_AUTH_CODE_ARRIVE: "SIGNAGE_AUTH_CODE_ARRIVE";
    readonly SIGNAGE_AUTH_COMPLETE: "SIGNAGE_AUTH_COMPLETE";
    readonly NOTIFICATION_ARRIVE: "NOTIFICATION_ARRIVE";
    readonly NOTICE_ARRIVE: "NOTICE_ARRIVE";
    readonly LOCALBOX_ARRIVE: "LOCALBOX_ARRIVE";
};
