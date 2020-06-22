import React from 'react';
import './App.css';

class Entity extends React.Component {
  render() {
    return (
      <>
        <p><span>{this.props.name}: </span><span><input type="text" value={this.props.amount}/></span></p>
      </>

    );
  }
}

export default Entity;