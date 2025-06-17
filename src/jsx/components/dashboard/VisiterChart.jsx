import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Nav, Tab } from 'react-bootstrap';

const chartHeaderData = [
    { title: 'Week', type: 'week' },
    { title: 'Month', type: 'month' },
    { title: 'Year', type: 'year' },
    { title: 'All', type: 'all' },
];

const VisiterChart = () => {
    const [series, setSeries] = useState([{
        name: 'Visitors',
        data: [90, 60, 70, 45, 40, 48, 27, 30]
    }]);

    const options = {
        chart: {
            height: 230,
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        colors: ["var(--primary)"],
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '19%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'inter',
                    color: 'var(--text)',
                }
            }
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'April',
                'May',
                'June',
                'July',
                'Aug',
            ],
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'inter',
                    color: 'var(--text)',
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            strokeDashArray: 5,
            borderColor: '$border-color',
        }
    };

    const dataSeries = (seriesType) => {
        let data = [];
        switch (seriesType) {
            case "week":
                data = [30, 52, 25, 75, 52, 100, 25, 40];
                break;
            case "month":
                data = [30, 35, 45, 35, 55, 45, 35, 70];
                break;
            case "year":
                data = [50, 40, 55, 25, 90, 40, 35, 55];
                break;
            case "all":
                data = [34, 60, 75, 40, 45, 60, 30, 55];
                break;
            default:
                data = [50, 40, 55, 25, 45, 40, 35];
        }
        setSeries([
            { name: "Visitors", data: data },
        ]);
    }

    return (
        <>
            <Tab.Container defaultActiveKey={'Week'}>
                <div className="card-header d-flex">
                    <h4 className="card-title">Visitors</h4>
                    <Nav as="ul" className="nav nav-tabs visitors-tabs d-flex align-items-center">
                        {chartHeaderData.map((item, index) => (
                            <Nav.Item as="li" className="nav-item m-0" key={index}>
                                <Nav.Link className="nav-link fs-13 font-w500" eventKey={item.title} onClick={() => dataSeries(item.type)}>
                                    {item.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </div>
                <div className="card-body pb-0 ps-1">
                    <div className="head-title ps-3">
                        <h4 className="fs-20 mb-0">70200k <span className="font-w700 fs-12 text-success">+2.7%</span></h4>
                    </div>
                    <div id="visitors-chart">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="bar"
                            height={230}
                        // width={562}
                        />
                    </div>
                </div>
            </Tab.Container>
        </>
    );
};

export default VisiterChart;
