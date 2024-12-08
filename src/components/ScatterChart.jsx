import ChartComponent from "./Chart";

export const ScatterChart = ({ data }) => {
    // Create a new array to label the data by the x and r coordinates
    let newArray = [];     
    for (let index = 0; index < data.expenses.length; index++) {
        newArray.push({x: data.expenses[index], y: data.profits[index]})
    }
  // Functional components to render a scatter chart  
  const scatterChartData = {
      labels: data.expenses,
      datasets: [
        {
          label: 'Expenses vs. Profits',
          data: newArray, // y-axis values based on the sales from the data prop
          backgroundColor: 'rgba(255, 135, 0, 0.2)', // styles the chart
          borderColor: 'rgba(255, 135, 0, 1)',
          borderWidth: 1,
        },
      ],
    };
    const scatterChartOptions = {
        scales: { //configures the chart axes
            x: {
                title: {
                    display: true,
                    text: 'Expenses'
                },
                type: 'linear',
                position: 'bottom'
            },
            y: {
                title: {
                    display: true,
                    text: 'Profits'
                }
            }
        },
      };
    // passes type, data, and options props to ChartComponent to render the scatter chart
    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};