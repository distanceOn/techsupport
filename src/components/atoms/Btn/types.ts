export type BtnColors = "grey";
export type BtnTypes = "submit" | "reset" | "button";

export type BtnStyles = {
  color: BtnColors;
  type: BtnTypes;
};

export type ButtonProps = BtnStyles & {
  color: BtnColors;
  children: React.ReactNode;
  onClick: () => void;
  type: BtnTypes;
};
