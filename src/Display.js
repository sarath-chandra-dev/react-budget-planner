import React from 'react';
import './App.css';
import Entity from './Entity';
class Display extends React.Component {
  render() {
    return (
      <>
        <p>Cash and investments</p>
        <Entity name="Chequing" amount="$0"/>
      </>

    );
  }
}

export default Display;