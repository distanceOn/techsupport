import { login, logout } from "../app/reducers/authSlice";
import { useAppDispatch } from "../app/reducers/reduxHooks";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const toLogIn = () => {
    dispatch(login());
  };
  const toLogOut = () => {
    dispatch(logout());
  };

  return {
    toLogIn,
    toLogOut,
  };
};
