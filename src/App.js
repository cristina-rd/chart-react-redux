import List from './components/List';
/* import Graph from './components/graph' */

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CREATE YOUR GRAPH</h1>
      </header>
      <div>
        <List />
        {/* <Graph /> */}
      </div>
    </div>
  );
}

export default App;
