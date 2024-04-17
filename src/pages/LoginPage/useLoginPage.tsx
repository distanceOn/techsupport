import { useState } from "react";
import { EventChangeInput, EventForm } from "../../utils/eventTypes";
import { useAuth } from "../../hooks/useAuth";

export const useLoginPage = () => {
  const { toLogIn } = useAuth();

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
      toLogIn();
    }
  };

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleLogin,
  };
};
