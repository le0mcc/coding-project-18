import { useState } from 'react'
import './App.css'
import React, { useEffect, useRef } from 'react';
import { BarChart } from './components/BarChart';
import { LineChart } from './components/LineChart';
import { ScatterChart } from './components/ScatterChart';
import { BubbleChart } from './components/BubbleChart';

function App() {
  // Store fetched data dna initialize the state the null
  const [chartData, setChartData] = useState(null);
  useEffect(() => { // runs when the component mounts
    fetch('/financial_data.json') // loads chart data from a JSON file
      .then((response) => response.json())
      .then((data) => setChartData(data)); // updates the state with the fetched data
  }, []);

  // display a loading message while the chartData is being fetched
  if (!chartData) {
    return <div>Loading...</div>;
  }
  
  return (
    // Render each chart component, passing chartData as the data prop
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Coding Challenge 18</h1>
        <BarChart data={chartData} />
        <LineChart data={chartData} />
        <ScatterChart data={chartData} />
        <BubbleChart data={chartData} />
      </div>
    </>
  )
};

export default App;