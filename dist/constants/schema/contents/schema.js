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
exports.MIXED_CONTENT_SCHEMA = exports.SIGNAGE_CONTENT_SCHEMA = exports.MOBILE_CONTENT_SCHEMA = exports.createSignageSchema = exports.createMobileSchema = void 0;
var yup = __importStar(require("yup"));
var createMobileSchema = function () {
    return yup.object().shape({
        title: yup
            .string()
            .required('콘텐츠 제목을 입력해주세요.')
            .max(30, '글자수를 초과 하였습니다.'),
        body: yup.string().required('내용을 입력해주세요.'),
        bodyText: yup.string().required('내용을 입력해주세요.').max(2001, ' '),
    });
};
exports.createMobileSchema = createMobileSchema;
var createSignageSchema = function () {
    return yup.object().shape({
        title: yup
            .string()
            .required('콘텐츠 제목을 입력해주세요.')
            .max(30, '글자수를 초과 하였습니다.'),
        summary: yup.string().required('내용을 입력해주세요.').max(216, ' '),
    });
};
exports.createSignageSchema = createSignageSchema;
exports.MOBILE_CONTENT_SCHEMA = (0, exports.createMobileSchema)();
exports.SIGNAGE_CONTENT_SCHEMA = (0, exports.createSignageSchema)();
exports.MIXED_CONTENT_SCHEMA = (0, exports.createMobileSchema)().shape({
    summary: yup.string().required('내용을 입력해주세요.').max(216, ' '),
});
