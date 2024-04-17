import { ChangeEvent, ChangeEventHandler } from "react";
import S from "./AreaField.module.scss";

export const AreaField = ({
  text,
  onChange,
  placeholder,
}: {
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= 1000) {
      onChange(event);
    }
  };

  return (
    <div className={S.container}>
      <textarea
        className={S.area}
        required
        value={text}
        onChange={handleChange}
        cols={30}
        rows={10}
        placeholder={placeholder}
      />
      <div className={S.counter}>{text.length}/1000</div>
    </div>
  );
};
