import S from "./Title.module.scss";

export const colors = {
  white: S.color_white,
  black: S.color_black,
};

export const sizes = {
  min: S.title_min,
  small: S.title_small,
  default: S.title_default,
  large: S.title_large,
};

export const titleTagMap: Record<string, keyof JSX.IntrinsicElements> = {
  large: "h1",
  default: "h2",
  small: "h3",
  min: "h4",
};
