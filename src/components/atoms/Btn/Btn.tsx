import S from "./Btn.module.scss";

export const Btn = ({
  text,
  onClick,
  type,
}: {
  text: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <button type={type} className={S.btn} onClick={onClick}>
      {text}
    </button>
  );
};
