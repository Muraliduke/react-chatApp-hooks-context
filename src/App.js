import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Store from './store'

function App() {
  return (
    <div className="App">
      <div>
        <Store>
          <Dashboard/>
        </Store>
      
      </div>
    </div>
  );
}

export default App;
