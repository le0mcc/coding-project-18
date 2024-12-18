import ChartComponent from "./Chart";

export const LineChart = ({ data }) => {
  // Functional components to render a line chart  
  const lineChartData = {
      labels: data.months, // x-axis labels based on months from the data prop
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits, // y-axis values based on the sales from the data prop
          backgroundColor: 'rgba(255, 135, 0, 0.2)', // styles the chart
          borderColor: 'rgba(255, 135, 0, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
        scales: { //configures the chart axes
          y: {
            beginAtZero: false, // fits the y axis to the graph
          },
        },
      };
    // passes type, data, and options props to ChartComponent to render the line chart
    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};