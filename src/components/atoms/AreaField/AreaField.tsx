import { ChangeEventHandler } from "react";

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
  return (
    <textarea
      className={S.area}
      required
      value={text}
      onChange={onChange}
      cols={30}
      rows={10}
      placeholder={placeholder}
    />
  );
};
