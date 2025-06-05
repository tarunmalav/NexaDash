

import ReactApexChart from "react-apexcharts";

const ProductOverviewChart = () => {
    const series = [37.5, 7.8, 12.5, 5.2, 19, 18]

    const options = {
        chart: {
            type: 'donut',
            parentHeightOffset: 0,
            sparkline: {
                enabled: true,
            },
        },
        colors: ["var(--primary)", "#F89D16", "#313949", "#21C68A", "#FF7A59", "#E9EDF5"],
        legend: {
            show: false,
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                size: 200,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: false,
                        },
                        value: {
                            show: true,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            formatter: function (w) {
                                return w.globals.seriesTotals[0] + "%"
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            <ReactApexChart
                options={options}
                type="donut"
                series={series}
                // height={300}
            />
        </>
    );
};

export default ProductOverviewChart;
