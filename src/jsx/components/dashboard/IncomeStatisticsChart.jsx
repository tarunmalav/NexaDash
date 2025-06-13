import ReactApexChart from "react-apexcharts";

const IncomeStatisticsChart = () => {
    const series = [
        {
            name: 'Actual',
            data: [96, 70, 90, 80],
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 150,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                borderRadius: 8,
                borderRadiusApplication: 'end',
            },
        },
        
        colors: [
            function({ value, dataPointIndex }) {
                
                if (value === 70 || value === 80) {
                    return '#EAFAF6'; 
                }
                return '#01BD9B'; 
            }
        ],
        dataLabels: {
            enabled: true,
            offsetY: -20,
            formatter: val => val + '%',
            style: {
                fontSize: '12px',
                fontWeight: 'bold',
                colors: ['#000'],
            },
        },
        stroke: {
            show: false,
            width: 4,
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
        xaxis: {
            categories: ['JAN-A', 'JAN-B', 'FEB-A', 'FEB-B'],
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
            crosshairs: { show: false },
        },
        yaxis: {
            max: 100,
            tickAmount: 5,
            labels: {
                offsetX: -12,
                style: {
                    colors: '#6F767E',
                    fontSize: '12px',
                    fontFamily: 'poppins',
                    fontWeight: 400,
                },
            },
        },
        legend: { show: false },
    };

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={150}
        />
    );
};

export default IncomeStatisticsChart;
