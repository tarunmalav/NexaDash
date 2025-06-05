import ReactApexChart from "react-apexcharts";

const ChartTimeline = () => {
    const series = [
        {
            name: "New Clients",
            data: [20, 40, 30, 50, 30, 20]
        }
    ]
    const optons = {
        chart: {
            type: "bar",
            height: 250,
            stacked: true,
            toolbar: {
                show: false
            },
            sparkline: {
                //enabled: true
            },
            offsetX: -10,
        },
        plotOptions: {
            bar: {
                columnWidth: "28%",
                endingShape: "rounded",
                startingShape: "rounded",
                borderRadius: 5,

                /* colors: {
                    backgroundBarColors: ['#111111', '#111111', '#111111', '#111111','#111111','#111111'],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 5,
                }, */

            },
            distributed: true
        },

        colors: ['#216FED'],
        grid: {
            show: false,
        },
        legend: {
            show: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                //gradientToColors: ['#FFEABA'],
                //inverseColors: true,
                //opacityFrom: 1,
                //opacityTo: 0,
                //stops: [0, 100]
                colorStops: [


                    {
                        offset: 0,
                        color: '#FFEABA',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: '#111111',
                        opacity: 1
                    }



                ]
            }
        },
        dataLabels: {
            enabled: false,
            colors: ['#000'],
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 1
            }
        },
        stroke: {
            show: true,
            lineCap: 'rounded',
        },
        xaxis: {
            categories: ['06', '07', '08', '09', '10', '11'],
            labels: {
                show: false,
                style: {
                    colors: '#FFEABA',
                    fontSize: '13px',
                    fontFamily: 'poppins',
                    fontWeight: 100,
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
            opposite: true,
            labels: {
                style: {
                    colors: '#808080',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 100,

                },
                offsetX: -15,
                formatter: function (y) {
                    return y.toFixed() + "k";
                }
            },
        },
        tooltip: {
            x: {
                show: true
            }
        },
        responsive: [{
            breakpoint: 375,
            options: {
                xaxis: {
                    categories: ['06', '07', '08', '09', '10', '11'],
                },
                chart: {
                    height: 250,
                },
                series: [
                    {
                        name: "New Clients",
                        data: [300, 250, 600, 600, 400, 450],
                    }
                ],

            }
        },
        {
            breakpoint: 575,
            options: {
                chart: {
                    height: 250,
                },
                series: [
                    {
                        name: "New Clients",
                        data: [300, 250, 600, 600, 400, 450, 310, 470, 480],
                    }
                ],
                xaxis: {
                    categories: ['06', '07', '08', '09', '10', '11', '12', '13', '14'],
                }
            }
        }
        ]
    }
    return (
        <>
            <ReactApexChart
                options={optons}
                series={series}
                type="bar" 
                height={250}
            />
        </>
    )
}
export default ChartTimeline;