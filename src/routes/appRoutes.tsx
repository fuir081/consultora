import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/login/login";
import RecoverPassword from "@/pages/forgotPass/forgotPass";
import Dashboard from "@/pages/dashboard/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/recuperar-clave" element={<RecoverPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
