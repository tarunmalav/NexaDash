import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Orange",
          backgroundColor: " #0074FF",
          hoverBackgroundColor: " #0074FF",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Glacier",
          backgroundColor: "rgba(99, 127, 235, 1)",
          hoverBackgroundColor: "rgba(99, 127, 235, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Green",
          backgroundColor: "rgba(0, 161, 93, 1)",
          hoverBackgroundColor: "rgba(0, 161, 93, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
      ],
    };
    const options = {
      plugins:{
		  legend: {
			display: false,
		  },
		  title: {
			display: false,
		  },
		  tooltips: {
			mode: "index",
			intersect: false,
		  },
		  responsive: true,
	  },
      scales: {
        x:
          {
            stacked: true,
          },
        y:
          {
            stacked: true,
          },
      },
    };

    return (
      <>
        <Bar data={data} height={150} options={options} />
      </>
    );
  }
}

export default BarChart6;
