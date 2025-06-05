import ReactApexChart from "react-apexcharts";

const NewCustomers = () => {
    const series = [
        {
            name: 'Net Profit',
            data: [100, 300, 200, 250, 200, 250, 200],
            /* radius: 30,	 */
        },
    ]
    const optons = {
        chart: {
            type: 'area',
            height: 70,
            //width: 400,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }

        },

        colors: ['#01BD9B'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 1,
            curve: 'smooth',
            colors: ['#01BD9B'],
        },

        grid: {
            show: false,
            borderColor: '#eee',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: -1

            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false,
                style: {
                    fontSize: '12px',

                }
            },
            crosshairs: {
                show: false,
                position: 'front',
                stroke: {
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                }
            }
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 0.9,
            colors: '#01BD9B',
            type: 'gradient',
            gradient: {
                colorStops: [

                    {
                        offset: 0,
                        color: '#01BD9B',
                        opacity: .4
                    },
                    {
                        offset: 0.6,
                        color: '#01BD9B',
                        opacity: .4
                    },
                    {
                        offset: 100,
                        color: '#01BD9B',
                        opacity: 0
                    }
                ],

            }
        },
        tooltip: {
            enabled: false,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        }
    }
    return (
        <>
            <ReactApexChart
                options={optons}
                series={series}
                type="area"
                width={142}
                height={70}
            />
        </>
    )
}
export default NewCustomers;