import S from "./Text.module.scss";

export const Text = ({ text }: { text: string }) => {
  return (
    <div className={S.text}>
      <p>{text}</p>
    </div>
  );
};
