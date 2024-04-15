import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedContent } from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedContent />}>
        <Route path="/" element={<div>dsad</div>} />
      </Route>
      <Route element={<ProtectedAuth />}>
        <Route path="/login" element={<div>login</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
