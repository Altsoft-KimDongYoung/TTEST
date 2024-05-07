import * as yup from 'yup';

export const VILLAGE_CONTENT_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .required('콘텐츠 제목을 입력해주세요.')
    .max(30, '글자수를 초과 하였습니다.'),
  body: yup
    .string()
    .required('내용을 입력해주세요.')
    .max(2000, '글자수를 초과 하였습니다.'),
});
