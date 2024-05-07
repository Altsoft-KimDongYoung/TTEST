import * as yup from 'yup';

export const VILLAGE_CONTENT_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .required('제목은 필수 입력 값 입니다.')
    .max(30, '글자수를 초과 하였습니다.'),
  body: yup
    .string()
    .required('내용은 필수 입력 값 입니다.')
    .max(2000, '글자수를 초과 하였습니다.'),
  multipartFile: yup.mixed<File | string>().required(),
});
