import { useState } from "react";
import { useAppDispatch } from "../../app/reducers/reduxHooks";
import { login } from "../../app/reducers/authSlice";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("admin");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState("admin");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      dispatch(login());
    }
    console.log("Login attempt with:", username, password);
  };

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleLogin,
  };
};
