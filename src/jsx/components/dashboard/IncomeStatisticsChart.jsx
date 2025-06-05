import ReactApexChart from "react-apexcharts";

const IncomeStatisticsChart = () => {
    const series = [
        {
            name: 'Income',
            data: [96, 90],
            // radius: 12,	
        },
        {
            name: 'Income',
            data: [70, 80]
        },

    ];
    const options = {
        chart: {
            type: 'bar',
            height: 150,

            toolbar: {
                show: false,
            },

        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '100% ',
                endingShape: "rounded",
                borderRadius: 8,
            },

        },
        states: {
            hover: {
                filter: 'none',
            }
        },
        colors: ['#01BD9B', '#E6F9F5'],
        dataLabels: {
            enabled: true,
            offsetY: -25,
            formatter: function (val, opts) {
                return val + '%';
            },
            style: {
                fontSize: '12px',
                fontWeight: '500',
                colors: ['#000']
            },
        },
        markers: {
            shape: "circle",
        },


        legend: {
            show: false,
            fontSize: '12px',
            labels: {
                colors: '#000000',

            },
            markers: {
                width: 18,
                height: 18,
                strokeWidth: 10,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
            }
        },
        stroke: {
            show: true,
            width:4 ,
            curve: 'smooth',
            lineCap: 'round',
            colors: ['transparent']
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            borderColor: 'rgba(0, 0, 0, 0.10)',
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR'],
            labels: {
                show: false,
                style: {
                    colors: '#A5AAB4',
                    fontSize: '12px',
                    fontWeight: '400',
                    fontFamily: 'poppins',
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            crosshairs: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: true,
                offsetX: -12,
                style: {
                    colors: '#6F767E',
                    fontSize: '12px',
                    fontFamily: 'poppins',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },

        },
    }
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={150}
            />
        </>
    )
}

export default IncomeStatisticsChart