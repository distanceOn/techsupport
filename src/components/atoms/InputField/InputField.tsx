import { EventKeyboard } from "../../../utils/eventTypes";
import S from "./InputField.module.scss";
import { InputFieldProps } from "./types";

export const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  required = false,
  onEnter,
}: InputFieldProps) => {
  const handleKeyDown = (event: EventKeyboard) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <input
      className={S.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      onKeyDown={handleKeyDown}
    />
  );
};
