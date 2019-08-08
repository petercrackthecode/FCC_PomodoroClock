import { LengthController } from "./components/LengthController.js";
import TimeCounter from "./components/TimeCounter.js";
import "./styles/App.css";

import React from "react";

class App extends React.Component {
  state = {
    m_sessionLength: 25,
    m_breakLength: 5,
    m_timeLeft: 25,
    m_isClockRunning: false
  };

  handleLimitIncrease = async (type = "", step, upperLimit) => {
    switch (type) {
      case "break":
        const newBreakLength = this.state.m_breakLength + step;
        if (newBreakLength <= upperLimit)
          await this.setState({ m_breakLength: newBreakLength });
        break;
      case "session":
        const newSessionLength = this.state.m_sessionLength + step;
        if (newSessionLength <= upperLimit)
          await this.setState({ m_sessionLength: newSessionLength });
        break;
      default:
        break;
    }
  };

  handleLimitDecrease = async (type = null, step, lowerLimit) => {
    switch (type) {
      case "break":
        const newBreakLength = this.state.m_breakLength - step;
        if (newBreakLength >= lowerLimit)
          await this.setState({ m_breakLength: newBreakLength });
        break;
      case "session":
        const newSessionLength = this.state.m_sessionLength - step;
        if (newSessionLength >= lowerLimit)
          await this.setState({ m_sessionLength: newSessionLength });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div id="app">
        <div id="pomodoro-clock" className="container text-center jumbotron">
          <h1 className="col-12 text-center">
            <strong>Pomodoro Clock</strong>
          </h1>
          <section className="row">
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
          </section>
          <section id='time-stamp'>
            <h2 id="time-label">Time</h2>
            <TimeCounter m_timeLeft={this.state.m_timeLeft} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
