import ReactApexChart from "react-apexcharts";

const RevenueBarChart = () => {
    const series = [
        {
            name: 'Running',
            data: [50, 90, 90],
        },
        {
            name: 'Cycling',
            data: [50, 60, 55]
        },
    ]
    const options = {
        chart: {
            type: 'bar',
            height: 120, 
            toolbar: {
                show: false,
            },

        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '100%',
                borderRadius: 8,
                borderRadiusApplication: 'end'
            },
              

        },
        states: {
            hover: {
                filter: 'none',
            }
        },
        colors: ['#F8B940', '#FFFFFF'],
        dataLabels: {
            enabled: false,
            offsetY: 0
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
                strokeWidth: 8,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
            }
        },
        stroke: {
            show: true,
            width: 4,
            curve: 'smooth',
            lineCap: 'round',
            colors: ['transparent']
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {
            show : false,
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
            labels: {
                show: false,
                style: {
                    colors: '#A5AAB4',
                    fontSize: '14px',
                    fontWeight: '500',
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
            show : false,
            labels: {
                show: false,
                offsetX: -16,
                style: {
                    colors: '#000000',
                    fontSize: '13px',
                    fontFamily: 'poppins',
                    fontWeight: 100,
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
                width={209}
                height={120}
            />
        </>
    );
}

export default RevenueBarChart