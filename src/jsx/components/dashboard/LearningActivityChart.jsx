import ReactApexChart from "react-apexcharts";

const LearningActivityChart = () => {
    const series = [
        {
            name: "",
            data: [60, 70, 80, 50, 60, 50, 90]
        },
        {
            name: "",
            data: [40, 50, 40, 60, 90, 70, 90]
        }
    ];

    const options = {
        chart: {
            height: 300,
            type: 'area',
            group: 'social',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [3, 3, 3],
            colors: ['#01BD9B', 'var(--primary)'],
            curve: 'straight'
        },
        legend: {
            show: false,
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            },
            markers: {
                fillColors: ['#01BD9B', 'var(--primary)'],
                width: 16,
                height: 16,
                strokeWidth: 0,
                radius: 16
            }
        },
        markers: {
            size: [8, 8],
            strokeWidth: [4, 4],
            strokeColors: ['#fff', '#fff'],
            border: 2,
            radius: 2,
            colors: ['#01BD9B', 'var(--primary)', '#fff'],
            hover: {
                size: 10,
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                style: {
                    colors: '#3E4954',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 100,

                },
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                minWidth: 20,
                offsetX: -16,
                style: {
                    colors: '#3E4954',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    fontWeight: 100,

                },
            },
        },
        fill: {
            colors: ['#01BD9B', '#FF9432'],
            type: 'gradient',
            opacity: 1,
            gradient: {
                shade: 'light',
                shadeIntensity: 1,
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: '#fff',
                            opacity: 0
                        },
                        {
                            offset: 0.6,
                            color: '#fff',
                            opacity: 0
                        },
                        {
                            offset: 100,
                            color: '#fff',
                            opacity: 0
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: 'var(--primary)',
                            opacity: .4
                        },
                        {
                            offset: 50,
                            color: 'var(--primary)',
                            opacity: 0.25
                        },
                        {
                            offset: 100,
                            color: '#fff',
                            opacity: 0
                        }
                    ]
                ]

            },
        },
        colors: ['#01BD9B', '#FF9432'],
        grid: {
            borderColor: '#f1f1f1',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        // responsive: [{
        //     breakpoint: 1602,
        //     options: {
        //         markers: {
        //             size: [6, 6, 4],
        //             hover: {
        //                 size: 7,
        //             }
        //         }, chart: {
        //             //height: 230,
        //         },
        //     }, 
        // }]
        responsive: [
            {
                breakpoint: 1600,
                options: {
                    chart: { height: 250 },
                    markers: { size: [6, 6], hover: { size: 7 } }
                }
            },
            {
                breakpoint: 1450,
                options: {
                    chart: { height: 230 },
                    markers: { size: [5, 5], hover: { size: 6 } }
                }
            },
            {
                breakpoint: 1200,
                options: {
                    chart: { height: 220 },
                    markers: { size: [5, 5], hover: { size: 6 } }
                }
            },
            {
                breakpoint: 992,
                options: {
                    chart: { height: 200 },
                    markers: { size: [4, 4], hover: { size: 5 } }
                }
            },
            {
                breakpoint: 768,
                options: {
                    chart: { height: 180 },
                    markers: { size: [3, 3], hover: { size: 4 } }
                }
            },
            {
                breakpoint: 576,
                options: {
                    chart: { height: 160 },
                    markers: { size: [3, 3], hover: { size: 4 } }
                }
            }
        ]
    };



    return (
        <>

            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={250}
            
            />

        </>
    );
};

export default LearningActivityChart;


// import ReactApexChart from "react-apexcharts";

// const LearningActivityChart = () => {
//     const series = [
//         {
//             name: "",
//             data: [60, 70, 80, 50, 60, 50, 90]
//         },
//         {
//             name: "",
//             data: [40, 50, 40, 60, 90, 70, 90]
//         }
//     ];

//     const options = {
//         chart: {
//             height: 300,
//             type: 'area',
//             group: 'social',
//             toolbar: {
//                 show: false
//             },
//             zoom: {
//                 enabled: false
//             },
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             width: [3, 3, 3],
//             colors: ['#01BD9B', 'var(--primary)'],
//             curve: 'straight'
//         },
//         legend: {
//             show: false,
//             tooltipHoverFormatter: function (val, opts) {
//                 return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
//             },
//             markers: {
//                 fillColors: ['#01BD9B', 'var(--primary)'],
//                 width: 16,
//                 height: 16,
//                 strokeWidth: 0,
//                 radius: 16
//             }
//         },
//         markers: {
//             size: [8, 8],
//             strokeWidth: [4, 4],
//             strokeColors: ['#fff', '#fff'],
//             border: 2,
//             radius: 2,
//             colors: ['#01BD9B', 'var(--primary)', '#fff'],
//             hover: {
//                 size: 10,
//             }
//         },
//         xaxis: {
//             categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//             labels: {
//                 style: {
//                     colors: '#3E4954',
//                     fontSize: '14px',
//                     fontFamily: 'Poppins',
//                     fontWeight: 100,
//                 },
//             },
//             axisBorder: {
//                 show: false,
//             }
//         },
//         yaxis: {
//             labels: {
//                 minWidth: 20,
//                 offsetX: -16,
//                 style: {
//                     colors: '#3E4954',
//                     fontSize: '14px',
//                     fontFamily: 'Poppins',
//                     fontWeight: 100,
//                 },
//             },
//         },
//         fill: {
//             colors: ['#01BD9B', '#FF9432'],
//             type: 'gradient',
//             opacity: 1,
//             gradient: {
//                 shade: 'light',
//                 shadeIntensity: 1,
//                 colorStops: [
//                     [
//                         { offset: 0, color: '#fff', opacity: 0 },
//                         { offset: 0.6, color: '#fff', opacity: 0 },
//                         { offset: 100, color: '#fff', opacity: 0 }
//                     ],
//                     [
//                         { offset: 0, color: 'var(--primary)', opacity: .4 },
//                         { offset: 50, color: 'var(--primary)', opacity: 0.25 },
//                         { offset: 100, color: '#fff', opacity: 0 }
//                     ]
//                 ]
//             },
//         },
//         colors: ['#01BD9B', '#FF9432'],
//         grid: {
//             borderColor: '#f1f1f1',
//             xaxis: { lines: { show: true } },
//             yaxis: { lines: { show: false } },
//         },
//         responsive: [
//             {
//                 breakpoint: 1600,
//                 options: {
//                     chart: { height: 250 },
//                     markers: { size: [6, 6], hover: { size: 7 } }
//                 }
//             },
//             {
//                 breakpoint: 1200,
//                 options: {
//                     chart: { height: 220 },
//                     markers: { size: [5, 5], hover: { size: 6 } }
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 options: {
//                     chart: { height: 200 },
//                     markers: { size: [4, 4], hover: { size: 5 } }
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 options: {
//                     chart: { height: 180 },
//                     markers: { size: [3, 3], hover: { size: 4 } }
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 options: {
//                     chart: { height: 160 },
//                     markers: { size: [3, 3], hover: { size: 4 } }
//                 }
//             }
//         ]
//     };

//     return (
//         <ReactApexChart
//             options={options}
//             series={series}
//             type="area"
//         />
//     );
// };

// export default LearningActivityChart;
