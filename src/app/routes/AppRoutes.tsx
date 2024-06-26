import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedContent } from "./ProtectedRoutes";
import { MainPage } from "../../pages/MainPage/MainPage";
import { TicketsPage } from "../../pages/TicketsPage/TicketsPage";
import { PetitionPage } from "../../pages/TicketPage/TicketPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedContent />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/tickets/:id" element={<PetitionPage />} />
      </Route>
      <Route element={<ProtectedAuth />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
