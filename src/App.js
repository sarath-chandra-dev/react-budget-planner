import React from 'react';
import './App.css';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tracking your net worth</h1>
        <span>Select currency</span>
        <select name="currency" id>
          <option value="CAD">CAD</option>
        </select>
        <h3>Net worth: $</h3>
        <Display />
      </div>

    );
  }
}

export default App;