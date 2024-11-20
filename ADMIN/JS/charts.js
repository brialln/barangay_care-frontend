// * This file contains the JavaScript code for the charts in the dashboard page.

const pieOptions = {
  chart: {
    type: 'pie',
    height: 400,
  },
  series: [44, 55, 13],
  labels: ['Barangay ID', 'Barangay Clearance', 'Barangay Indigency'],
  legend: {
    fontSize: '16px', // Adjust the font size
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
  dataLabels: {
    style: {
      fontSize: '16px', // Adjust the font size
      fontFamily: 'Montserrat',
      fontWeight: '500', // Optional
    },
  },
};

const pieChart = new ApexCharts(document.querySelector("#pieChart"), pieOptions);
pieChart.render();


const stackedAreaOptions = {
  chart: {
    type: 'area',
    height: 400,
    stacked: true,
  },
  series: [
    {
      name: 'Product A',
      data: [44, 55, 41, 37, 22, 43, 21, 22],
    },
    {
      name: 'Product B',
      data: [53, 32, 33, 52, 13, 43, 32, 22],
    },
    {
      name: 'Product C',
      data: [12, 17, 11, 9, 15, 11, 20, 22],
    },
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      style: {
        fontSize: '16px', // Adjust the font size
        fontFamily: 'Montserrat',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '15px', // Adjust the font size
        fontFamily: 'Montserrat',
      },
    },
  },
  legend: {
    fontSize: '16px', // Adjust the legend font size
    fontFamily: 'Montserrat',
  },
};

const stackedAreaChart = new ApexCharts(document.querySelector("#stackedAreaChart"), stackedAreaOptions);
stackedAreaChart.render();


const donutOptions = {
  chart: {
    type: 'donut',
    height: 400,
  },
  series: [44, 55, 41, 17],
  labels: ['Series A', 'Series B', 'Series C', 'Series D'],
  legend: {
    fontSize: '16px', // Adjust the font size
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
  dataLabels: {
    style: {
      fontSize: '16px', // Adjust the font size
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
    },
  },
};

const donutChart = new ApexCharts(document.querySelector("#donutChart"), donutOptions);
donutChart.render();


const lineOptions = {
  chart: {
    type: 'line',
    height: 400,
  },
  series: [
    {
      name: 'Sales',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      style: {
        fontSize: '14px', // X-axis font size
        fontFamily: 'Montserrat',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px', // Y-axis font size
        fontFamily: 'Montserrat',
      },
    },
  },
  legend: {
    fontSize: '14px', // Legend font size
    fontFamily: 'Montserrat',
  },
};

const lineChart = new ApexCharts(document.querySelector("#lineChart"), lineOptions);
lineChart.render();
