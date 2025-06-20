import { Component } from "react";
import { Bar } from "react-chartjs-2";

class BloodPressur extends Component {
  render() {
    const data = {
      labels: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38],
      datasets: [
        {
          label: "My First dataset",
          data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38],
          borderColor: "rgba(255,172, 68,1)",
          borderWidth: "0",
          backgroundColor: "rgb(255,222,222)",
		      barThickness : 6
        },
      ],
    };

    const options = {
      plugins:{
		legend: false,
		responsive: true,  
	  },
      maintainAspectRatio: false,
      scales: {
        y: 
          {
            display: false,
            ticks: {
              beginAtZero: true,
              display: false,
              max: 100,
              min: 0,
              stepSize: 7,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        
        x:
          {
            display: false,
            barPercentage: 0.6,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        
      },
    };

    return (
      <div 
        style={{ height: 100, width:200,  display: 'inline-block'}}
      
      >
        <Bar data={data}  options={options} />
      </div>
    );
  }
}

export default BloodPressur;
