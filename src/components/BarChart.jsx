import ChartComponent from "./Chart";

export const BarChart = ({ data }) => {
  // Functional components to render a bar chart  
  const barChartData = {
      labels: data.months, // x-axis labels based on months from the data prop
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales, // y-axis values based on the sales from the data prop
          backgroundColor: 'rgba(255, 135, 0, 0.2)', // styles the chart
          borderColor: 'rgba(255, 135, 0, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: { //configures the chart axes
          y: {
            beginAtZero: true, // ensures the Y-axis from zero for a consistent scale
          },
        },
      };
    // passes type, data, and options props to ChartComponent to render the bar chart
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};