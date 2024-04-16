import { useState } from "react";
import { useAppDispatch } from "../../app/reducers/reduxHooks";
import { login } from "../../app/reducers/authSlice";
import { EventChangeInput, EventForm } from "../../utils/eventTypes";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const handleChangeUsername = (event: EventChangeInput) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: EventChangeInput) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: EventForm) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      dispatch(login());
    }
    console.log("Попытка входа:", username, password);
  };

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleLogin,
  };
};
