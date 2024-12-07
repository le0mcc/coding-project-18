import ChartComponent from "./Chart";

export const ScatterChart = ({ data }) => {
  // Functional components to render a scatter chart  
  const scatterChartData = {
      labels: data.months, // x-axis labels based on months from the data prop
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales, // y-axis values based on the sales from the data prop
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // styles the chart
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const scatterChartOptions = {
        scales: { //configures the chart axes
          y: {
            beginAtZero: true, // ensures the Y-axis from zero for a consistent scale
          },
        },
      };
    // passes type, data, and options props to ChartComponent to render the scatter chart
    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};