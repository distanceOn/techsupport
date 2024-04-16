import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { useLogin } from "./useLogin";

import S from "./LoginPage.module.scss";
import { LoginForm } from "../../components/molecules/LoginForm/LoginForm";

export const LoginPage = () => {
  const {
    username,
    password,
    handleChangePassword,
    handleChangeUsername,
    handleLogin,
  } = useLogin();

  return (
    <DefaultTemplate
      content={
        <div className={S.container}>
          <LoginForm
            username={username}
            password={password}
            handleChangePassword={handleChangePassword}
            handleChangeUsername={handleChangeUsername}
            onLoginSubmit={handleLogin}
          />
        </div>
      }
    />
  );
};
