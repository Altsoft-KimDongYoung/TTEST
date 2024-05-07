import {
  FontType,
  HorizontalAlignType,
  VerticalAlignType,
} from '@/components/common';

export type Signages = 'signages';

export type TextType = 'title' | 'summary';
export interface TextForm extends Record<PropertyKey, unknown> {
  size: FontType;
  color: string;
  horizontalAlign: HorizontalAlignType;
  verticalAlign: VerticalAlignType;
  text: string;
}
