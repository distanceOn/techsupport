import { InputField } from "../../atoms/InputField/InputField";
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
    <h2>Авторизация</h2>
    <InputField
      label="Логин"
      type="text"
      id="login"
      value={username}
      onChange={handleChangeUsername}
      required
    />
    <InputField
      label="Пароль"
      type="password"
      id="password"
      value={password}
      onChange={handleChangePassword}
      required
    />
    <button type="submit" className={S.btn}>
      Войти
    </button>
  </form>
);
