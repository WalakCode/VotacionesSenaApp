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

  console.log(estadisticasDatos)

  const graficosPorJornada = Object.keys(estadisticasDatos).map((jornada) => {

    const nameCandidato = [];
    const quantityVotos = [];

    if(jornada != "Blanco"){
      estadisticasDatos[jornada].forEach(e => {
      const nombreCandidato = e.nombre_votante
      nameCandidato.push(nombreCandidato)
      const cantidadVotos = e.cantidad_votos
      quantityVotos.push(cantidadVotos)
      });
    }else{
      const blanco = estadisticasDatos[jornada]
      Object.keys(blanco).map((x)=>{
        const nombreCand = x
        nameCandidato.push(nombreCand)
        const cantidadVot = blanco[x]
        quantityVotos.push(cantidadVot)
      })
    }
    
    const numeroVotos = quantityVotos;
    const candidatos = nameCandidato;

    console.log(numeroVotos,candidatos)

    return {
      labels: candidatos,
      datasets: [
        {
          label: `Jornada ${jornada}`,
          data: numeroVotos,
          tension: 0.5,
          fill: true,
          backgroundColor: "blue",
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
        display: false,
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

  return (
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
  );
}

export default AdminPage;
