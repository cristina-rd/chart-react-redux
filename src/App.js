import React from 'react';
import List from './components/List';
import ChartContainer from './components/ChartContainer'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CREATE YOUR GRAPH</h1>
      </header>
      <div>
        <List />
        <ChartContainer />
      </div>
    </div>
  );
}

export default App;
