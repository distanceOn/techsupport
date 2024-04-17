import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

export const ProtectedContent = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  if (!isAuth) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};

export const ProtectedAuth = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const location = useLocation();

  if (isAuth)
    return (
      <Navigate
        to={"/"}
        state={{ from: location }} // передаем страницу, с которой перешли, чтобы можно было на нее вернуться
        replace
      />
    );
  return <Outlet />;
};
