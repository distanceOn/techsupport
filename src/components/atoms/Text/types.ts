export type TextColors = "white" | "grey" | "lightgrey" | "black";
export type TextSizes = "default" | "thin";

export type TextStyles = {
  color: TextColors;
  size: TextSizes;
};

export type TextProps = TextStyles & {
  children: React.ReactNode;
};
