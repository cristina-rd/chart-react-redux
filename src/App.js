import React from 'react';
import List from './components/List';
import ChartContainer from './components/ChartContainer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CREATE YOUR CHART</h1>
      </header>
      <div className="content">
        <List />
        <ChartContainer />
      </div>
    </div>
  );
}

export default App;
