import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import VotoPageMañana from "../page/VotoPageMañana";
import VotoPageTarde from "../page/VotoPageTarde";
import VotoPageNoche from "../page/VotoPageNoche";
import VotoPageVirtual from "../page/VotoPageNoche";
import ProtectedRouters from "../context/ProtectedRouters";
import AdminPage from "../page/AdminPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<p>Ruta no encontrada</p>} />
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
