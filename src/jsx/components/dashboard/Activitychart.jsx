import { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActivityChart = () => {
    const chartRef = useRef(null);
    const activityData = [
        {
            first: [3000, 3500, 3000, 4000, 4000, 3000, 4000, 4000, 3000, 4000, 4500],
            second: [2500, 4000, 3500, 4500, 3800, 3500, 3800, 3500, 3500, 3800, 4000],
        },
    ];
    const labels = [
        "10:59PM", "11:59PM", "12:59AM", "1:59AM", "2:59AM",
        "3:59AM", "4:59AM", "5:59AM", "6:59AM", "7:59AM"
    ];
    const data = {
        labels,
        datasets: [
            {
                label: "Active",
                data: activityData[0].first,
                borderColor: "#1C1C1C",
                backgroundColor: "rgba(28, 28, 28, 0)",
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 0,
            },
            {
                label: "Inactive",
                data: activityData[0].second,
                borderColor: "#1D69D6",
                backgroundColor: "rgba(255, 142, 38, 0)",
                borderWidth: 2,
                tension: 0.5,
                pointRadius: 0,
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                show: true,
                grid: {
                    show: true,
                    color: "rgba(233,236,255,1)",
                    drawBorder: true
                },
                ticks: {
                    font: {
                        size: 11,
                        family: "Poppins"
                    },
                    color: "#6E6E6E"
                }
            },
            x: {
                show: true,
                grid: {  
                    color: "rgba(233,236,255,1)"
                },
                ticks: {
                    font: {
                        size: 11,
                        family: "Poppins"
                    },
                    color: "#6E6E6E"
                }
            },
        },
        tooltips: {
            enabled: false,
            mode: "index",
            intersect: false,
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 10
        }
    };
    return (
        <Line ref={chartRef} data={data} options={options} height={236} />

    );
};
export default ActivityChart;
