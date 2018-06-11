import React, { Component } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import "./App.css";
import calc from "./calculator";

const Root = styled.div`
  padding: 8px;
`;

class App extends Component {
  state = {
    data: null
  };

  render() {
    const { data } = this.state;

    return (
      <Root>
        <button onClick={this.handleCalculate}>Calculate</button>
        { data && <Line data={data} /> }
      </Root>
    );
  }

  handleCalculate = () => {
    const { set, labels } = calc();
    const label = "Percent of coincidence";

    const data = {
      labels,
      datasets: [{
        label,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        data: set
      }]
    };

    this.setState({ data });
  };
}

export default App;
