import { LengthController } from "./components/LengthController.js";
import "./styles/App.css";

import React from "react";

class App extends React.Component {
  state = {
    m_sessionLength: 25,
    m_breakLength: 5
  };

  handleLimitIncrease = async (type = "", step, upperLimit) => {
    switch (type) {
      case "break":
        const newBreakLength= this.state.m_breakLength + step;
        if (newBreakLength <= upperLimit)
          await this.setState({m_breakLength: newBreakLength});
        break;
      case "session":
        const newSessionLength= this.state.m_sessionLength + step;
        if (newSessionLength <= upperLimit)
          await this.setState({m_sessionLength: newSessionLength});
        break;
      default:
        break;
    }
  };

  handleLimitDecrease = async (type = null, step, lowerLimit) => {
    switch (type) {
      case "break":
        const newBreakLength= this.state.m_breakLength - step;
        if (newBreakLength >= lowerLimit)
          await this.setState({m_breakLength: newBreakLength});
        break;
      case "session":
        const newSessionLength= this.state.m_sessionLength - step;
        if (newSessionLength >= lowerLimit)
          await this.setState({m_sessionLength: newSessionLength});
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div id="app">
        <div id="pomodoro-clock">
          <h1>Pomodoro Clock</h1>
          <LengthController
            id="break"
            m_length={this.state.m_breakLength}
            handleIncrement={this.handleLimitIncrease}
            handleDecrement={this.handleLimitDecrease}
          />
          <LengthController
            id="session"
            m_length={this.state.m_sessionLength}
            handleIncrement={this.handleLimitIncrease}
            handleDecrement={this.handleLimitDecrease}
          />
        </div>
      </div>
    );
  }
}

export default App;
