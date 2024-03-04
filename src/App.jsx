import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import LoginPage from "../page/LoginPage";
import VotoPageMañana from "../page/VotoPageMañana";
import VotoPageTarde from "../page/VotoPageTarde";
import VotoPageNoche from "../page/VotoPageNoche";
import VotoPageVirtual from "../page/VotoPageVirtual";
import ProtectedRouters from "../context/ProtectedRouters";
import AdminPage from "../page/AdminPage";
import ErrorPage from "../page/ErrorPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<LoginPage />} />

          <Route element={<ProtectedRouters />}>
            <Route path="/VotarMañana" element={<VotoPageMañana />} />
            <Route path="/VotarTarde" element={<VotoPageTarde />} />
            <Route path="/VotarNoche" element={<VotoPageNoche />} />
            <Route path="/VotarVirtual" element={<VotoPageVirtual />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
