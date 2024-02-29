import axios from "axios";

// Se define la URL base del servidor back-end
const API = "https://votacionessena.up.railway.app";

// Realiza una solicitud de inicio de sesión al servidor back-end.
export const loginRequest = (values) =>
  axios.post(`${API}/api/v2/login`, values);

export const getCandidatos = (token) =>
  axios.get(`${API}/api/v2/candidatos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const voto = (token, values) =>
  axios.post(
    `${API}/api/v2/votos`,
    { candidatoID: values },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getEstadisticas = (token) =>
  axios.get(`${API}/api/v2/estadisticas`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

