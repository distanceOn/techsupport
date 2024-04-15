import React, { useState } from "react";
import "./LoginPage.module.scss";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { useAppDispatch } from "../../app/reducers/reduxHooks";
import { login } from "../../app/reducers/authSlice";

export const LoginPage = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const dispatch = useAppDispatch();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      dispatch(login());
    }
    console.log("Login attempt with:", username, password);
  };

  return (
    <DefaultTemplate
      content={
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      }
    />
  );
};
