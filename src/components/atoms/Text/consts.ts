import { TextColors, TextSizes } from "./types";
import S from "./Text.module.scss";

export const colorClassNames: Record<TextColors, string> = {
  white: S.color_white,
  grey: S.color_grey,
  lightgrey: S.color_lightgrey,
  black: S.color_black,
  gold: S.color_gold,
};

export const sizeClassNames: Record<TextSizes, string> = {
  default: S.text_default,
  thin: S.text_thin,
};
