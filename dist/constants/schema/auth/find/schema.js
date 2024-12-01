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
exports.FIND_PASSWORD_EMAIL_SCHEMA = exports.FIND_PASSWORD_MOBILE_SHCEMA = exports.FIND_ACCOUNT_EMAIL_SCHEMA = exports.FIND_ACCOUNT_MOBILE_SCHEMA = exports.createFindAccountSchema = void 0;
var yup = __importStar(require("yup"));
var regex_1 = require("@/constants/regex");
var createFindAccountSchema = function () {
    return yup.object().shape({
        name: yup
            .string()
            .required('이름을 입력해주세요.')
            .matches(regex_1.REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    });
};
exports.createFindAccountSchema = createFindAccountSchema;
exports.FIND_ACCOUNT_MOBILE_SCHEMA = (0, exports.createFindAccountSchema)().shape({
    mobile: yup
        .string()
        .required('휴대폰번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
});
exports.FIND_ACCOUNT_EMAIL_SCHEMA = (0, exports.createFindAccountSchema)().shape({
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
});
exports.FIND_PASSWORD_MOBILE_SHCEMA = yup.object().shape({
    loginId: yup
        .string()
        .required('아이디를 입력해주세요.')
        .matches(regex_1.REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
        .max(12, '12자 이하로 입력해주세요.'),
    mobile: yup
        .string()
        .required('휴대폰번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    password: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
    passwordConfirm: yup
        .string()
        .required('비밀번호를 동일하게 입력해주세요.')
        .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
});
exports.FIND_PASSWORD_EMAIL_SCHEMA = yup.object().shape({
    loginId: yup
        .string()
        .required('아이디를 입력해주세요.')
        .matches(regex_1.REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
        .max(12, '12자 이하로 입력해주세요.'),
    email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
    password: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .matches(regex_1.REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
    passwordConfirm: yup
        .string()
        .required('비밀번호를 동일하게 입력해주세요.')
        .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
});
