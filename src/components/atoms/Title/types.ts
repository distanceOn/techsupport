export type TitleColors = "white" | "black";
export type TitleSizes = "min" | "small" | "default" | "large";

export type TitleStyles = {
  color: TitleColors;
  size: TitleSizes;
};

export type TitleProps = TitleStyles & {
  children: React.ReactNode;
};
