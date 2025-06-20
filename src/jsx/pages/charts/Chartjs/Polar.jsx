import { Component } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [15, 18, 9, 6, 19],
      borderWidth: 0,
      backgroundColor: [
        "rgba(235, 129, 83,1)",
        "rgba(112, 159, 186, 1)",
        "rgba(0, 115, 255, 1)",
        "rgba(54, 147, 255, 1)",
        "rgba(136,108,196, 1)",
      ],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      ticks: {
        display: false, 
      },
      grid: {
        color: "#333", 
      },
      angleLines: {
        color: "#444", 
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

class PolarChart extends Component {
  render() {
    return <PolarArea data={data} options={options} height={150} />;
  }
}

export default PolarChart;
