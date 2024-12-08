import ChartComponent from "./Chart";

export const BubbleChart = ({ data }) => {
  // Create a new array to label the data by the x, y, and r coordinates
  let newArray = [];
  for (let index = 0; index < data.sales.length; index++) {
        newArray.push({x: data.sales[index], y: data.expenses[index], r: data.profits[index]/276*15})
  }
  // Functional components to render a bubble chart  
  const bubbleChartData = {
      labels: data.sales,
      datasets: [
        {
          label: 'Profits',
          data: newArray, // y-axis values based on the sales from the data prop
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // styles the chart
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const bubbleChartOptions = {
        scales: { //configures the chart axes
          y: {
            beginAtZero: false, // fits the y axis to the graph
          },
        },
      };
    // passes type, data, and options props to ChartComponent to render the bubble chart
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};