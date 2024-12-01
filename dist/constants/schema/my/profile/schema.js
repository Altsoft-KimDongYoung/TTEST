"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_NEWSPAPER_PROFILE_SCHEMA = exports.GVMT_PROFILE_SCHEMA = exports.APARTMENT_PROFILE_SCHEMA = exports.BUSINESS_PROFILE_SCHEMA = exports.MEMBER_PROFILE_SCHEMA = void 0;
var yup = __importStar(require("yup"));
var file_1 = require("@/constants/file");
var input_1 = require("@/constants/input");
var regex_1 = require("@/constants/regex");
var SCHEMA = function (schema) { return schema; };
exports.MEMBER_PROFILE_SCHEMA = SCHEMA({
    info: yup.object().shape({}),
    'nickname-edit': yup.object().shape({
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
            .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
    }),
    'phoneNumber-auth': yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        newPhoneNumber: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    }),
    'phoneNumber-edit': yup.object().shape({}),
    'password-auth': yup.object().shape({
        currentPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    }),
    'password-edit': yup.object().shape({
        newPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
        newPasswordConfirm: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
    }),
    'email-auth': yup.object().shape({
        newEmail: yup
            .string()
            .required('이메일을 입력해주세요.')
            .matches(regex_1.REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
    }),
    'email-edit': yup.object().shape({}),
});
exports.BUSINESS_PROFILE_SCHEMA = SCHEMA({
    info: yup.object().shape({
        homepageUrl: yup
            .string()
            .notRequired()
            .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', function (value) {
            if (!value)
                return true;
            return regex_1.REG_EXP.HOMEPAGE_URL.test(value);
        })
            .url('올바른 URL 형식이 아닙니다.'),
        licenseFile: yup
            .mixed()
            .required('사업자등록증을 첨부해주세요.')
            .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
            if (value instanceof File || (value instanceof FileList && value.length > 0)) {
                var file = value instanceof File ? value : value[0];
                return file.size <= file_1.SIZE.MAX_DOC_FILE;
            }
            return false;
        }),
    }),
    'nickname-edit': yup.object().shape({
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
            .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
    }),
    'phoneNumber-auth': yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        newPhoneNumber: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    }),
    'phoneNumber-edit': yup.object().shape({}),
    'password-auth': yup.object().shape({
        currentPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    }),
    'password-edit': yup.object().shape({
        newPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
        newPasswordConfirm: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
    }),
    'email-auth': yup.object().shape({
        newEmail: yup
            .string()
            .required('이메일을 입력해주세요.')
            .matches(regex_1.REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
    }),
    'email-edit': yup.object().shape({}),
});
exports.APARTMENT_PROFILE_SCHEMA = SCHEMA({
    info: yup.object().shape({
        homepageUrl: yup
            .string()
            .notRequired()
            .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', function (value) {
            if (!value)
                return true;
            return regex_1.REG_EXP.HOMEPAGE_URL.test(value);
        })
            .url('올바른 URL 형식이 아닙니다.'),
        employmentFile: yup
            .mixed()
            .required('임명장 또는 재직증명서를 첨부해주세요.')
            .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
            if (value instanceof File || (value instanceof FileList && value.length > 0)) {
                var file = value instanceof File ? value : value[0];
                return file.size <= file_1.SIZE.MAX_DOC_FILE;
            }
            return false;
        }),
    }),
    'nickname-edit': yup.object().shape({
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
            .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
    }),
    'phoneNumber-auth': yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        newPhoneNumber: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    }),
    'phoneNumber-edit': yup.object().shape({}),
    'password-auth': yup.object().shape({
        currentPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    }),
    'password-edit': yup.object().shape({
        newPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
        newPasswordConfirm: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
    }),
    'email-auth': yup.object().shape({
        newEmail: yup
            .string()
            .required('이메일을 입력해주세요.')
            .matches(regex_1.REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
    }),
    'email-edit': yup.object().shape({}),
});
exports.GVMT_PROFILE_SCHEMA = SCHEMA({
    info: yup.object().shape({
        employmentFile: yup
            .mixed()
            .required('공무원 재직증명서를 첨부해주세요.')
            .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
            if (value instanceof File || (value instanceof FileList && value.length > 0)) {
                var file = value instanceof File ? value : value[0];
                return file.size <= file_1.SIZE.MAX_DOC_FILE;
            }
            return false;
        }),
    }),
    'nickname-edit': yup.object().shape({
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
            .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
    }),
    'phoneNumber-auth': yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        newPhoneNumber: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    }),
    'phoneNumber-edit': yup.object().shape({}),
    'password-auth': yup.object().shape({
        currentPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    }),
    'password-edit': yup.object().shape({
        newPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
        newPasswordConfirm: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
    }),
    'email-auth': yup.object().shape({
        newEmail: yup
            .string()
            .required('이메일을 입력해주세요.')
            .matches(regex_1.REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
    }),
    'email-edit': yup.object().shape({}),
});
exports.LOCAL_NEWSPAPER_PROFILE_SCHEMA = SCHEMA({
    info: yup.object().shape({
        homepageUrl: yup
            .string()
            .notRequired()
            .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', function (value) {
            if (!value)
                return true;
            return regex_1.REG_EXP.HOMEPAGE_URL.test(value);
        })
            .url('올바른 URL 형식이 아닙니다.'),
        licenseFile: yup
            .mixed()
            .required('사업자등록증을 첨부해주세요.')
            .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
            if (value instanceof File || (value instanceof FileList && value.length > 0)) {
                var file = value instanceof File ? value : value[0];
                return file.size <= file_1.SIZE.MAX_DOC_FILE;
            }
            return false;
        }),
        employmentFile: yup
            .mixed()
            .required('임명장 또는 재직증명서를 첨부해주세요.')
            .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
            if (value instanceof File || (value instanceof FileList && value.length > 0)) {
                var file = value instanceof File ? value : value[0];
                return file.size <= file_1.SIZE.MAX_DOC_FILE;
            }
            return false;
        }),
        serviceName: yup.string().required('신문사명을 입력해주세요.'),
    }),
    'nickname-edit': yup.object().shape({
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
            .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
    }),
    'phoneNumber-auth': yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        newPhoneNumber: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    }),
    'phoneNumber-edit': yup.object().shape({}),
    'password-auth': yup.object().shape({
        currentPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    }),
    'password-edit': yup.object().shape({
        newPassword: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
        newPasswordConfirm: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
    }),
    'email-auth': yup.object().shape({
        newEmail: yup
            .string()
            .required('이메일을 입력해주세요.')
            .matches(regex_1.REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
    }),
    'email-edit': yup.object().shape({}),
});
