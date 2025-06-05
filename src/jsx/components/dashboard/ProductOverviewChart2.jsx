

import ReactApexChart from "react-apexcharts";

const ProductOverviewChart2 = () => {
    const series = [37.5, 7.8, 12.5, 5.2, 19, 18]

    const options = {
        chart: {
            type: 'donut',
            width: 350,
        },
        colors: ["var(--primary)", "#F89D16", "#313949", "#21C68A", "#FF7A59", "#E9EDF5"],
        legend: {
            show: false,
        },
        stroke: {
            curve: 'monotoneCubic',
            lineCap: 'round',
            radius: 80,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                size: 200,
                donut: {
                    size: '80%',
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
        },
        responsive: [{
            breakpoint: 1199,
            options: {
                chart: {
                    width: 250,
                }
            }
        }, {
            breakpoint: 991,
            options: {
                chart: {
                    width: 170,
                }
            }
        }, {
            breakpoint: 768,
            options: {
                chart: {
                    width: 300,
                }
            }
        }]
    }

    return (
        <>
            <ReactApexChart
                options={options}
                type="donut"
                series={series}
            height={270}
            width={350}
            />
        </>
    );
};

export default ProductOverviewChart2;
