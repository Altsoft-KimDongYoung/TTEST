/** @SIGNAGE 사이니지 컨텐츠에 사용되는 폰트 크기 타입 */
export type FontType = 't1' | 't2' | 't3';

/** @SIGNAGE 사이니지 컨텐츠에 사용되는 텍스트 박스의 수직 정렬 타입 */
export type VerticalAlignType = 'center' | 'top' | 'bottom';

/** @SIGNAGE 사이니지 컨텐츠에 사용되는 텍스트 박스의 수평 정렬 타입 */
export type HorizontalAlignType = 'center' | 'left' | 'right';

/** @SIGNAGE 텍스트가 title인지 summary인지 명시하는 타입. */
export type TextType = 'title' | 'summary';

/** @SIGNAGE 텍스트를 구성하는 사이즈, 색상, 정렬순서, 내용을 정의한 타입 */
export interface TextForm extends Record<PropertyKey, unknown> {
  size: FontType;
  color: string;
  horizontalAlign: HorizontalAlignType;
  verticalAlign: VerticalAlignType;
  text: string;
}

export type ColorInfoSizeType = 'lg' | 'sm';
