import React from 'react';
import './App.css';

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
      </div>
      
    );
  }
}

export default App;