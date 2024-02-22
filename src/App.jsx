import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import VotoPage from "../page/VotoPage";
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
            <Route path="/voto" element={<VotoPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
