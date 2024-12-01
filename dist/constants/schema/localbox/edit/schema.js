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
exports.LOCALBOX_EDIT_SCHEMA = void 0;
var yup = __importStar(require("yup"));
var input_1 = require("@/constants/input");
var regex_1 = require("@/constants/regex");
var SCHEMA = function (schema) { return schema; };
exports.LOCALBOX_EDIT_SCHEMA = SCHEMA(yup.object().shape({
    nickname: yup
        .string()
        .required('닉네임을 입력해주세요.')
        .matches(regex_1.REG_EXP.NICKNAME, "\uB2C9\uB124\uC784\uC740 1 ~ ".concat(input_1.MAX_LENGTH.NICKNAME, "\uAE00\uC790 \uD55C\uAE00, \uC601\uBB38, \uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))
        .max(input_1.MAX_LENGTH.NICKNAME, "".concat(input_1.MAX_LENGTH.NICKNAME, "\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
}));
