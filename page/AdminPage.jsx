import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import GraficaBarra from "./GraficaBarra";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

function AdminPage() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
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

  const graficosPorJornada = Object.keys(estadisticasDatos).map((jornada) => {
    const nameCandidato = [];
    const quantityVotos = [];

    if (Array.isArray(estadisticasDatos[jornada])) {
      estadisticasDatos[jornada].forEach((voto, index) => {
        const nombreCandidato = voto.nombre_votante;
        nameCandidato.push(nombreCandidato);
        const cantidadVotos = voto.cantidad_votos;
        quantityVotos.push(cantidadVotos);
      });
    } else {
      console.log(`No hay datos para mostrar en la jornada ${jornada}.`);
    }

    const numeroBotos = quantityVotos;
    const candidatos = nameCandidato;

    return {
      labels: candidatos,
      datasets: [
        {
          label: `Beneficios - Jornada ${jornada}`,
          data: numeroBotos,
          tension: 0.5,
          fill: true,
          backgroundColor: "rgba(0, 255, 0, 1)",
          borderColor: "black",
          pointRadius: 5,
        },
      ],
    };
  });

  const options = {
  };

  return (
    <div>
      {graficosPorJornada.map((midata, index) => (
        <div key={index} style={{ width: "600px", height: "400px" }}>
          <Line data={midata} options={options} />
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
