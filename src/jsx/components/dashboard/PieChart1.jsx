import ReactApexChart from "react-apexcharts";

const PieChart1 = () => {
    const series = [25, 33, 29, 16];
    const options = {
        chart: {
            type: 'donut',
            height: 180
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0,
        },
        colors: ['#B4EDFF', '#7BDFFF', '#FFFFFF', '#018DB9'],
        legend: {
            position: 'bottom',
            show: false
        },
        responsive: [{
            breakpoint: 1400,
            options: {
                chart: {
                    height: 150
                },
            }
        }]
    }
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height={150}
                width={239}
            />
        </>
    )
}

export default PieChart1