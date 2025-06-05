
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Nav, Tab } from 'react-bootstrap';

const chartHeaderData = [
    { title: 'Week', type: 'week' },
    { title: 'Month', type: 'month' },
    { title: 'Year', type: 'year' },
    { title: 'All', type: 'all' },
];

const UpdatesChart = () => {
    const [series, setSeries] = useState([{
        name: 'Revenue',
        data: [0, 52, 25, 75, 52, 100, 25]
    }]);

    const options = {
        chart: {
            height: 220,
            type: 'area',
            toolbar: false,
        },
        colors: ['var(--primary)'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'straight', // Adjusted for smoother lines
            colors: ['var(--primary)'],
        },
        legend: {
            show: false
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
        fill: {
            opacity: 0.5,
            colors: 'var(--primary)',
            type: 'gradient',
            gradient: {
                colorStops: [{
                    offset: 0.6,
                    color: 'var(--primary)',
                    opacity: .2
                },
                {
                    offset: 0.6,
                    color: 'var(--primary)',
                    opacity: .15
                },
                {
                    offset: 100,
                    color: 'white',
                    opacity: 0
                }]
            }
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
                data = [30, 52, 25, 75, 52, 100, 25, 45];
                break;
            case "month":
                data = [30, 35, 45, 35, 55, 45, 35, 45];
                break;
            case "year":
                data = [30, 40, 80, 25, 65, 40, 100, 45];
                break;
            case "all":
                data = [30, 60, 20, 60, 45, 100, 70, 45];
                break;
            default:
                data = [30, 40, 75, 55, 45, 100, 35];
        }
        setSeries([
            { name: "Revenue", data: data },
        ]);
    }

    return (
        <>
            <Tab.Container defaultActiveKey={'Week'}>
                <div className="card-header d-flex flex-wrap gap-2">
                    <h4 className="card-title sm-mb-2 mb-0">Revenue Updates</h4>
                    <Nav as="ul" className="nav nav-tabs updates-tabs d-flex align-items-center">
                        {chartHeaderData.map((item, index) => (
                            <Nav.Item as="li" className="nav-item m-0" key={index}>
                                <Nav.Link className="nav-link fs-13 font-w500" eventKey={item.title} onClick={() => dataSeries(item.type)}>
                                    {item.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </div>
                <div className="card-body pb-0 ps-1 pe-1">
                    <div className="head-title">
                        <h4 className="fs-20 ps-3">$18,217k <span className="fs-12 font-w700 text-success">+2.7%</span></h4>
                        <div id="updates-chart">
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="area"
                                height={220} 
                            />
                        </div>
                    </div>
                </div>
            </Tab.Container>
        </>
    );
};

export default UpdatesChart;
