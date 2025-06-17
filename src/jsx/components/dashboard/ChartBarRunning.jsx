import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Nav, Tab } from 'react-bootstrap'; 

const chartHeaderData = [
    { title: 'Week', type: 'week' },
    { title: 'Month', type: 'month' },
    { title: 'Year', type: 'year' },
    { title: 'All', type: 'all' },
];

const ChartBarRunning = () => {
    const [series, setSeries] = useState([
        {
            name: 'Revenue',
            data: [31, 40, 28, 25, 40, 28, 31, 40, 28, 31, 40, 28]
        },
        {
            name: 'Active Projects',
            data: [11, 32, 45, 38, 25, 20, 36, 45, 15, 11, 32, 45]
        },
    ]);

    const options = {
        chart: {
            type: 'bar',
            height: 300,


            toolbar: {
                show: false,
            },

        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '45%',
                borderRadius: 3,

            },
        },
        colors: ['#1C2430', '#01BD9B'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: true,
            fontSize: '13px',
            labels: {
                colors: '#888888',

            },
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: ['var(--primary)', '#1c2430'],
                radius: 30,
            }
        },
        stroke: {
            show: true,
            width: 6,
            colors: ['transparent']
        },
        grid: {
            show: true,
            borderColor: '#EEF0F7',
            strokeDashArray: 3,
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
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    colors: ['#1C2430'],
                    fontSize: '13px',
                    fontFamily: 'poppins',
                    fontWeight: 100,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: '#1C2430',
                height: 6,
                offsetX: 0,
                offsetY: 0
            },
            crosshairs: {
                show: true,
            }
        },
        yaxis: {
            labels: {
                offsetX: -16,
                style: {
                    colors: ['#1C2430'],
                    fontSize: '15px',
                    fontFamily: 'poppins',
                    fontWeight: 100,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        fill: {
            opacity: 1,
            colors: ['var(--secondary)', 'var(--primary)'],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + ""
                }
            }
        },
        responsive: [{
            breakpoint: 575,
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: '1%',
                        borderRadius: -1,
                    },
                },
                chart: {
                    height: 250,
                },
                series: [
                    {
                        name: 'Projects',
                        data: [31, 40, 28, 31, 40, 28, 31, 40]
                    },
                    {
                        name: 'Projects',
                        data: [11, 32, 45, 31, 40, 28, 31, 40]
                    },

                ],
            }
        }]
    };

    const dataSeries = (seriesType) => {
        var columnData = [];
        var areaData = [];
        var lineData = [];

        switch (seriesType) {
            case "week":
                columnData = [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100];
                areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
                break;
            case "month":
                columnData = [20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85];
                areaData = [40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 22];

                break;
            case "year":
                columnData = [30, 20, 80, 52, 10, 90, 50, 30, 95, 20, 60, 85];
                areaData = [40, 25, 40, 45, 85, 25, 50, 65, 35, 60, 20, 32];
                break;
            case "all":
                columnData = [20, 50, 80, 60, 10, 80, 50, 40, 95, 20, 60, 85];
                areaData = [40, 25, 30, 45, 85, 25, 95, 65, 50, 55, 40, 12];
                break;
            default:
                columnData = [75, 80, 72, 100, 50, 100, 80, 30, 95, 35, 75, 100];
                areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
        }

        setSeries([
            {
                name: "Revenue",
                type: 'column',
                data: columnData
            }, {
                name: 'Active Projects',
                type: 'column',
                data: areaData
            }
        ]);
    }

    return (
        <>
            <Tab.Container defaultActiveKey={'Week'}>
                <div className="card-header border-0 pb-0 flex-wrap">
                    <div className="blance-media">
                        <h5 className="mb-0">Your Balance</h5>
                        <h4 className="mb-0">$25,217k <span className="badge badge-sm badge-success light">+2.7%</span></h4>
                    </div>
                    <Nav as="ul" className="nav nav-pills revenue-tab">
                        {chartHeaderData.map((item, index) => (
                            <Nav.Item as="li" className="nav-item" key={index}>
                                <Nav.Link eventKey={item.title} onClick={() => dataSeries(item.type)} className="nav-link">
                                    {item.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </div>
                <div className="card-body p-0">
                    <div id="chartBarRunning" className="pt-0">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="bar"
                            height={300}
                        />
                    </div>
                    <div className="ttl-project">
                        <div className="pr-data">
                            <h5>12,721</h5>
                            <span>Number of Projects</span>
                        </div>
                        <div className="pr-data">
                            <h5 className="text-primary">721</h5>
                            <span>Active Projects</span>
                        </div>
                        <div className="pr-data">
                            <h5>$2,50,523</h5>
                            <span>Revenue</span>
                        </div>
                        <div className="pr-data">
                            <h5 className="text-success">12,275h</h5>
                            <span>Working Hours</span>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        </>
    );
};

export default ChartBarRunning;
