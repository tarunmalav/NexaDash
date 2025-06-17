import ReactApexChart from "react-apexcharts";

const EarningChart = () => {
    const series = [
        {
            name: 'Net Profit',
            data: [667, 400, 380, 500, 600, 510, 610, 520, 400, 600, 510, 610, 610],
        },
    ]
    const chartWidth = 545
    const optons = {
        chart: {
            type: 'area',
            height: 250,
            width: chartWidth + 30,
            toolbar: {
                show: false,
            },
            offsetX: -20,
            zoom: {
                enabled: false
            },
        },

        colors: ['#38BDE7'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'smooth',
            colors: ['#38BDE7'],
        },
        grid: {
            show: true,
            borderColor: '#eee',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        yaxis: {
            show: true,
            tickAmount: 6,
            min: 0,
            max: 800,
            labels: {
                offsetX: 0,
                colors: ['#6F767E'],
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun', 'Jul', 'Aug', 'Sep ', 'Oct', 'Nov', 'Dec'],
            overwriteCategories: undefined,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: true,
                offsetX: 5,
                style: {
                    fontSize: '12px',
                    colors: ['#6F767E'],

                }
            },
        },
        fill: {
            opacity: 0.5,
            colors: '#38BDE7',
            type: 'gradient',
            gradient: {
                colorStops: [

                    {
                        offset: 0.6,
                        color: '#38BDE7',
                        opacity: .2
                    },
                    {
                        offset: 0.6,
                        color: '#38BDE7',
                        opacity: .15
                    },
                    {
                        offset: 100,
                        color: 'white',
                        opacity: 0
                    }
                ],

            }
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return "$" + val + "k"
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
                height={250}
            />
        </>
    )
}
export default EarningChart;