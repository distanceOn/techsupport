import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedContent } from "./ProtectedRoutes";
import { MainPage } from "../../pages/MainPage/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedContent />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route element={<ProtectedAuth />}>
        <Route path="/login" element={<div>login</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
