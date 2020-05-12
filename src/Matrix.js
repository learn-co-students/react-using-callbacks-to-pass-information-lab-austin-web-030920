import React, { Component } from "react";
import learnSymbol from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();

    this.state = {
      currentColor: "#F00"
    };

    // setInterval(() => console.log(this.state), 1000);
  }

  setColor = (hexColor) => {
    this.setState({ currentColor: hexColor });
  };

  genRow = (vals) =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} currentColor={this.state.currentColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector handleSetColor={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: learnSymbol
};
