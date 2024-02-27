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

const numeroBotos = [1, 20, 57, 2, 15, 30, 42, 8, 19, 55, 12, 33];
const candidatos = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
var midata = {
  labels: candidatos,
  datasets: [
    {
      label: "beneficios",
      data: numeroBotos,
      tnesion: 0.5,
      fill: true,
      backgroundColor: "rgba(0, 255, 0, 1)",
      borderColor: "black",
      pointRadius: 5,
    }
  ],
};

var misoptions = {

}
export default function LinesChart() {
  return <Line data={midata} options={misoptions} />;
}
