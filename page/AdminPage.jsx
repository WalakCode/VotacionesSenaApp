import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function AdminPage() {
  const { estadisticas } = useAuth();
  const [estadisticasDatos, setEstadisticas] = useState([]);

  const { state } = useLocation();
  const token = state.token;

  useEffect(() => {
    const obtenerEstadisticas = async () => {
      try {
        const result = await estadisticas(token);
        setEstadisticas(result.Data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerEstadisticas();
  }, [estadisticas, token]);

  console.log(estadisticasDatos);

  return (
    <div>
      {Object.keys(estadisticasDatos).map((jornada) => (
        <div key={jornada}>
          <h2>{jornada}</h2>
          {Array.isArray(estadisticasDatos[jornada]) ? (
            estadisticasDatos[jornada].map((voto, index) => (
              <div key={index}>
                <p>cedula del candidato: {voto.cedula_candidato}</p>
                <p>Nombre del candidato: {voto.nombre_votante}</p>
                <p>cantidad de votos: {voto.cantidad_votos}</p>
                <p>-----------------------------------</p>
              </div>
            ))
          ) : (
            <p>No hay datos para mostrar en esta jornada.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
