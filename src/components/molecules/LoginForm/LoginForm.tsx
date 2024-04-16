import { Btn } from "../../atoms/Btn/Btn";
import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";
import S from "./LoginForm.module.scss";

interface LoginFormProps {
  username: string;
  password: string;
  handleChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
  onLoginSubmit,
}) => (
  <form className={S.form} onSubmit={onLoginSubmit}>
    <Title color="white" size="small">
      Вход в аккаунт
    </Title>
    <InputField
      placeholder="admin"
      type="text"
      value={username}
      onChange={handleChangeUsername}
      required
    />
    <InputField
      placeholder="*****"
      type="password"
      value={password}
      onChange={handleChangePassword}
      required
    />
    <Btn color="white" type="submit" onClick={() => {}}>
      Войти
    </Btn>
  </form>
);
