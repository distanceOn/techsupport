import { ChangeEventHandler } from "react";

export const AreaField = ({
  text,
  onChange,
}: {
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <textarea required value={text} onChange={onChange} cols={30} rows={10} />
  );
};
