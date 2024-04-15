import { Route, Routes } from "react-router-dom";
import { ProtectedAuth, ProtectedContent } from "./ProtectedRoutes";
import { MainPage } from "../../pages/MainPage/MainPage";
import { TicketsPage } from "../../pages/TicketsPage/MainPage";
import { PetitionPage } from "../../pages/TicketPage/TicketPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";

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
    </Routes>
  );
};

export default AppRoutes;
