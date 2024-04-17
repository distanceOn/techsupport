import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { useLoginPage } from "./useLoginPage";

import { LoginForm } from "../../components/molecules/LoginForm/LoginForm";

export const LoginPage = () => {
  const {
    username,
    password,
    handleChangePassword,
    handleChangeUsername,
    handleLogin,
  } = useLoginPage();

  return (
    <DefaultTemplate
      children={
        <LoginForm
          username={username}
          password={password}
          handleChangePassword={handleChangePassword}
          handleChangeUsername={handleChangeUsername}
          onLoginSubmit={handleLogin}
        />
      }
    />
  );
};
