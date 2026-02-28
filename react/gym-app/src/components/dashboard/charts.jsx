import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChartExample = ({
  usersPaymentsPag,
  usersPaymentsPen,
  usersPaymentsCan,
}) => {
  console.log(usersPaymentsPag);

  const data = {
    labels: usersPaymentsPag.map((u) => u.name),
    datasets: [
      {
        label: "Pagado",
        data: usersPaymentsPag.map((u) => u.totalPayments),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Pendiente",
        data: usersPaymentsPen.map((u) => u.totalPayments),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Cancelado",
        data: usersPaymentsCan.map((u) => u.totalPayments),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ventas Mensuales",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChartExample;
