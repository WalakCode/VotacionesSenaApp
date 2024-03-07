import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const { estadisticas } = useAuth();
  const [estadisticasDatos, setEstadisticas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useLocation();
  const token = state.token;

  useEffect(() => {
    const obtenerEstadisticas = async () => {
      setIsLoading(true);

      try {
        const result = await estadisticas(token);
        setEstadisticas(result.Data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    obtenerEstadisticas();
  }, [estadisticas, token]);

  console.log(estadisticasDatos);

  const handleReloadData = async () => {
    setIsLoading(true);

    try {
      const result = await estadisticas(token);
      setEstadisticas(result.Data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const graficosPorJornada = Object.keys(estadisticasDatos).map((jornada) => {
    const nameCandidato = [];
    const quantityVotos = [];

    console.log("jornada", jornada);
    if (jornada !== "Blanco") {
      estadisticasDatos[jornada].forEach((e) => {
        const nombreCandidato = e.nombre_votante;
        nameCandidato.push(nombreCandidato);
        const cantidadVotos = e.cantidad_votos;
        quantityVotos.push(cantidadVotos);
      });
    } else {
      const blanco = estadisticasDatos[jornada];
      Object.keys(blanco).forEach((x) => {
        const nombreCand = x;
        nameCandidato.push(nombreCand);
        const cantidadVot = blanco[x];
        quantityVotos.push(cantidadVot);
      });
    }

    const numeroVotos = quantityVotos;
    const candidatos = nameCandidato;

    return {
      labels: candidatos,
      datasets: [
        {
          label: `Votos ${jornada}`,
          data: numeroVotos,
          fill: true,
          backgroundColor: "#00324d",
          borderColor: "black",
        },
      ],
    };
  });

  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: { color: "black" },
      },
    },
  };
  function redirect() {
    window.location.reload();
  }
  return (
    <div>
      <div className="title-estadisticas">
        <div className="container-text">
          <h1>Resultados de las Votaciones</h1>
          <button className="boton-salir" onClick={redirect}>Cerrar sesion</button>
        </div>
        <div className="container-graficas-body">
          <div className="container-graficos">
            {graficosPorJornada.map((midata, index) => (
              <div key={index} className="graficos">
                <Bar
                  data={midata}
                  options={options}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="button-admin"
        onClick={handleReloadData}
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : "Recargar Datos"}
      </button>
    </div>
  );
}

export default AdminPage;
