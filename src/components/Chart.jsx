// Import chart and react
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Task 2: Create the Reusable Chart Component
const ChartComponent = ({ type, data, options }) => {
    // Define a functional component that accepts type, data, and options as props
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    // React hoot to execute code when the component mounts, updates, or unmounts
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d'); // accesses the 2d rendering context of the canvas
        // Check if an existing Chart.js instance exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy(); // destroys the existing chart to preent overlapping or memory leaks
          }
          // Creates a new Chart.js instance with the given context chart type, data, and options
          chartInstanceRef.current = new Chart(ctx, {
            type,
            data,
            options,
          });

          // Cleanup function runs when the component unmounts
          return () => {
            if (chartInstanceRef.current) {
              chartInstanceRef.current.destroy(); // destroys the chart instance to free memory
              chartInstanceRef.current = null; // reset the reference to ensure it's not pointing to an invalid instance
            }
          };
        }, [type, data, options]); 
        // The HTML element where the chart will be rendered
        return <canvas ref={chartRef}></canvas>;
    }

    export default ChartComponent;