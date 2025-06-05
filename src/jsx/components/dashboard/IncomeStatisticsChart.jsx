import ReactApexChart from "react-apexcharts";

const IncomeStatisticsChart = () => {
    const series = [
        {
            name: 'Actual',
            data: [96, 90],
        },
        {
            name: 'Target',
            data: [70, 80],
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
                // endingShape: 'rounded',
                borderRadius: 8,
                borderRadiusApplication: 'end'
            },
        },
        colors: ['#01BD9B', '#E6F9F5'],
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
            categories: ['JAN', 'FEB'],
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
