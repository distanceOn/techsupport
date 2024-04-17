import S from "./InputField.module.scss";

type InputFieldProps = {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  required?: boolean;
};

export const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  required = false,
  onEnter,
}: InputFieldProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
