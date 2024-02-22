import {
  loginRequest,
  getCandidatos,
  voto,
  getEstadisticas,
} from "../api/auths";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("NO hay contexto.");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // login
  const singIn = async (values) => {
    try {
      const results = await loginRequest(values);
      const token = results.headers.authorization;
      const tokenValue = token.substring(7);
      const resultSatus = results.status;
      setUser(results.data);
      setIsAuthenticated(true);

      return { resultSatus: resultSatus, token: tokenValue };
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        const errorResponse = error.response.status;
        return { errorData: errorData, errorResponse: errorResponse };
      } else {
        console.log(error);
      }
    }
  };

  // obtiene los candidatos
  const getCandi = async (token) => {
    try {
      const results = await getCandidatos(token);
      const Data = results.data.info;
      return { Data: Data };
    } catch (error) {
      console.log(error);
    }
  };
  const votos = async (token, user) => {
    try {
      const result = await voto(token, user);
      const resultData = result.data;
      const resultResponse = result.status;
      return { resultData: resultData, resultResponse: resultResponse };
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        const errorResponse = error.response.status;
        return { errorData: errorData, errorResponse: errorResponse };
      } else {
        console.log(error);
      }
    }
  };

  const estadisticas = async (token) => {
    try {
      const result = await getEstadisticas(token);
      const Data = result.data.info; 
      return { Data: Data };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        singIn,
        getCandi,
        votos,
        estadisticas,
        user,
        isAuthenticated,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
