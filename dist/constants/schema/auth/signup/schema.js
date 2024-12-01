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
exports.SIGNUP_LOCAL_NEWSPAPER_SCHEMA = exports.SIGNUP_GVMT_SCHEMA = exports.SIGNUP_APARTMENT_SCHEMA = exports.SIGNUP_BUSINESS_SCHEMA = exports.SIGNUP_MEMBER_SCHEMA = exports.createSignupSchema = void 0;
var yup = __importStar(require("yup"));
var file_1 = require("@/constants/file");
var regex_1 = require("@/constants/regex");
var createSignupSchema = function () {
    return yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
        mobile: yup
            .string()
            .required('휴대폰번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
        nickname: yup
            .string()
            .required('닉네임을 입력해주세요.')
            .matches(regex_1.REG_EXP.NICKNAME, '닉네임은 1 ~ 12글자 한글, 영문, 숫자만 입력 가능합니다.')
            .max(12, '12자 이하로 입력해주세요.'),
        loginId: yup
            .string()
            .required('아이디를 입력해주세요.')
            .matches(regex_1.REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
            .max(12, '12자 이하로 입력해주세요.'),
        password: yup
            .string()
            .required('비밀번호를 입력해주세요.')
            .matches(regex_1.REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
        passwordConfirm: yup
            .string()
            .required('위의 비밀번호와 동일하게 입력해주세요.')
            .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
    });
};
exports.createSignupSchema = createSignupSchema;
exports.SIGNUP_MEMBER_SCHEMA = (0, exports.createSignupSchema)().shape({
    email: yup.string().email('이메일 형식이 아닙니다.'),
});
exports.SIGNUP_BUSINESS_SCHEMA = (0, exports.createSignupSchema)().shape({
    businessName: yup.string().required('상호명을 입력해주세요.'),
    businessNumber: yup
        .string()
        .required('사업자번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.BUSINESS_NUMBER, '올바른 사업자번호 형식이 아닙니다.'),
    openDt: yup.string().required('개업일자룰 입력해주세요.'),
    ownerName: yup.string().required('대표자명을 입력해주세요.'),
    businessContactNumber: yup
        .string()
        .required('전화번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
    baseAddr: yup.string().required('사업자등록증 주소를 입력해주세요.'),
    homepageUrl: yup
        .string()
        .notRequired()
        .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', function (value) {
        if (!value)
            return true;
        return regex_1.REG_EXP.HOMEPAGE_URL.test(value);
    })
        .url('올바른 URL 형식이 아닙니다.'),
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
    licenseImg: yup
        .mixed()
        .required('파일을 첨부해주세요.')
        .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
            var file = value instanceof File ? value : value[0];
            return file.size <= file_1.SIZE.MAX_DOC_FILE;
        }
        return false;
    }),
});
exports.SIGNUP_APARTMENT_SCHEMA = (0, exports.createSignupSchema)().shape({
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
    organizationName: yup.string().required('아파트 단지명을 입력헤주세요.'),
    ownerName: yup.string().required('대표자명을 입력해주세요.'),
    contactNumber: yup
        .string()
        .required('관리소 전화번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
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
        .required('파일을 첨부해주세요.')
        .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
            var file = value instanceof File ? value : value[0];
            return file.size <= file_1.SIZE.MAX_DOC_FILE;
        }
        return false;
    }),
});
exports.SIGNUP_GVMT_SCHEMA = (0, exports.createSignupSchema)().shape({
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
    organizationName: yup.string().required('관공서명을 입력해주세요.'),
    contactNumber: yup
        .string()
        .required('관공서 연락처를 입력해주세요.')
        .matches(regex_1.REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
    contactName: yup.string().required('담당자명울 입력해주세요.'),
    employmentFile: yup
        .mixed()
        .required('파일을 첨부해주세요.')
        .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
            var file = value instanceof File ? value : value[0];
            return file.size <= file_1.SIZE.MAX_DOC_FILE;
        }
        return false;
    }),
});
exports.SIGNUP_LOCAL_NEWSPAPER_SCHEMA = (0, exports.createSignupSchema)().shape({
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
    businessName: yup.string().required('사업자명을 입력해주세요.'),
    businessNumber: yup.string().required('사업자번호를 입력해주세요.'),
    openDt: yup.string().required('개업일자를 입력해주세요.'),
    ownerName: yup.string().required('대표자명을 입력해주세요.').max(15, '15자 이하로 입력해주세요.'),
    businessContactNumber: yup
        .string()
        .required('신문사 연락처를 입력해주세요.')
        .matches(regex_1.REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
    newspaperName: yup
        .string()
        .required('신문사명을 입력해주세요.')
        .max(24, '올바른 형식이 아닙니다.'),
    newspaperRegNumber: yup
        .string()
        .required('신문사 등록번호를 입력해주세요.')
        .max(24, '올바른 형식이 아닙니다.'),
    baseAddr: yup.string().required('사업자등록증 주소를 입력해주세요.'),
    homepageUrl: yup
        .string()
        .notRequired()
        .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', function (value) {
        if (!value)
            return true;
        return regex_1.REG_EXP.HOMEPAGE_URL.test(value);
    })
        .url('올바른 URL 형식이 아닙니다.'),
    licenseImg: yup
        .mixed()
        .required('파일을 첨부해주세요.')
        .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
            var file = value instanceof File ? value : value[0];
            return file.size <= file_1.SIZE.MAX_DOC_FILE;
        }
        return false;
    }),
    employmentFile: yup
        .mixed()
        .required('파일을 첨부해주세요.')
        .test('fileSize', "".concat(file_1.SIZE.CONVERT.MAX_DOC_FILE_MB, " \uC774\uD558\uB85C \uC5C5\uB85C\uB4DC\uD574\uC8FC\uC138\uC694."), function (value) {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
            var file = value instanceof File ? value : value[0];
            return file.size <= file_1.SIZE.MAX_DOC_FILE;
        }
        return false;
    }),
});
