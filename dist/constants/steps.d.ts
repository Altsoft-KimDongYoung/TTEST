export declare const COMMON_STEPS: {
    readonly AUTH: {
        readonly SIGNUP_COMMON: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox"];
        readonly FIND_ACCOUNT_MOBILE_COMMON: readonly ["mobile-input", "mobile-auth", "complete"];
        readonly FIND_ACCOUNT_EMAIL_COMMON: readonly ["email-input", "email-auth", "complete"];
        readonly FIND_PASSWORD_MOBILE_COMMON: readonly ["mobile-input", "mobile-auth", "change-password", "complete"];
        readonly FIND_PASSWORD_EMAIL_COMMON: readonly ["email-input", "email-auth", "change-password", "complete"];
    };
    readonly MY: {
        readonly PROFILE_COMMON: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
    };
    readonly VILLAGES: {
        readonly CONTENT_COMMON: readonly ["expose", "form", "complete"];
    };
    readonly RESIDENTS: {
        readonly SIGNAGE_EDITOR_COMMON: readonly ["crop", "edit", "complete"];
        readonly MOBILE_CONTENT_COMMON: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_CONTENT_COMMON: readonly ["signage_form"];
        readonly MIXED_CONTENT_COMMON: readonly ["mix_mobile_form", "mix_signage_form"];
    };
    readonly ADS: {
        readonly SIGNAGE_EDITOR_COMMON: readonly ["crop", "edit", "complete"];
        readonly MOBILE_CONTENT_COMMON: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_CONTENT_COMMON: readonly ["signage_form"];
        readonly MIXED_CONTENT_COMMON: readonly ["mix_mobile_form", "mix_signage_form"];
    };
};
export declare const STEPS: {
    readonly AUTH: {
        readonly SIGNUP_MEMBER: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox", "complete"];
        readonly SIGNUP_BUSINESS: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox", "business-info", "business-address", "approving"];
        readonly SIGNUP_APARTMENT: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox", "apartment-info", "approving"];
        readonly SIGNUP_GVMT: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox", "gvmt-info", "approving"];
        readonly SIGNUP_LOCAL_NEWSPAPER: readonly ["terms", "phone-auth-request", "phone-auth-confirm", "email-auth", "location", "localbox", "localNewspaper-info", "localNewspaper-address", "approving"];
        readonly FIND_ACCOUNT_MOBILE: readonly ["mobile-input", "mobile-auth", "complete"];
        readonly FIND_ACCOUNT_EMAIL: readonly ["email-input", "email-auth", "complete"];
        readonly FIND_PASSWORD_MOBILE: readonly ["mobile-input", "mobile-auth", "change-password", "complete"];
        readonly FIND_PASSWORD_EMAIL: readonly ["email-input", "email-auth", "change-password", "complete"];
    };
    readonly MY: {
        readonly PROFILE_MEMBER: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
        readonly PROFILE_BUSINESS: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
        readonly PROFILE_APARTMENT: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
        readonly PROFILE_GVMT: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
        readonly PROFILE_LOCAL_NEWSPAPER: readonly ["info", "nickname-edit", "phoneNumber-auth", "phoneNumber-edit", "password-auth", "password-edit", "email-edit", "email-auth"];
        readonly WITHDRAW: readonly ["warning", "feedback"];
        readonly QR_CERTIFY: readonly ["certify-info", "qr-scan"];
        readonly SUB_CONTENT_INSERT: readonly ["paste", "select-content", "display-time"];
    };
    readonly VILLAGES: {
        readonly CONTENT_REGISTER: readonly ["expose", "form", "complete"];
        readonly CONTENT_EDIT: readonly ["expose", "form", "complete"];
    };
    readonly RESIDENTS: {
        readonly MOBILE_REGISTER: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_REGISTER: readonly ["signage_form", "crop", "edit", "complete"];
        readonly MIXED_REGISTER: readonly ["mix_mobile_form", "mix_signage_form", "crop", "edit", "complete"];
        readonly MOBILE_EDIT: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_EDIT: readonly ["signage_form", "crop", "edit", "complete"];
        readonly MIXED_EDIT: readonly ["mix_mobile_form", "mix_signage_form", "crop", "edit", "complete"];
        readonly MAIN_ADD_REGISTER: readonly ["init_setting", "main_Form", "crop", "edit", "complete"];
        readonly SIGNAGE_ADD_REGISTER: readonly ["init_setting", "signage_Form", "crop", "edit", "complete"];
    };
    readonly ADS: {
        readonly MOBILE_REGISTER: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_REGISTER: readonly ["signage_form", "crop", "edit", "complete"];
        readonly MIXED_REGISTER: readonly ["mix_mobile_form", "mix_signage_form", "crop", "edit", "complete"];
        readonly MOBILE_EDIT: readonly ["mobile_form", "complete"];
        readonly SIGNAGE_EDIT: readonly ["signage_form", "crop", "edit", "complete"];
        readonly MIXED_EDIT: readonly ["mix_mobile_form", "mix_signage_form", "crop", "edit", "complete"];
        readonly MAIN_ADD_REGISTER: readonly ["main_Form", "crop", "edit", "complete"];
        readonly SIGNAGE_ADD_REGISTER: readonly ["init_setting", "signage_form", "crop", "edit", "complete"];
    };
};
