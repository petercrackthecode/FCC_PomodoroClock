import { LengthController } from "./components/LengthController.js";
import TimeCounter from "./components/TimeCounter.js";
import { StartStopBtn as StartStop } from "./components/StartStopBtn.js";
import { ResetBtn } from "./components/ResetBtn.js";
import "./styles/App.css";

import React from "react";

class App extends React.Component {
  state = {
    m_sessionLength: 25,
    m_breakLength: 5,
    m_timeLeft: "25:00",
    m_isClockRunning: false
  };

  timeStringToSecond = (time = "") => {
    const minute = parseInt(time.substr(0, 2));
    const second = parseInt(time.substr(3, 2));
    const overallSecond = minute * 60 + second;

    return overallSecond;
  };

  secondToTimeString = (secondAsWhole = 0) => {
    const minute = ~~(secondAsWhole / 60);
    const second = secondAsWhole - minute * 60;

    return `${minute.toString()}:${second.toString()}`;
  };

  handleLimitIncrease = async (type = "", step, upperLimit) => {
    if (!this.state.m_isClockRunning) {
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
    }
  };

  handleLimitDecrease = async (type = null, step, lowerLimit) => {
    if (!this.state.m_isClockRunning) {
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
    }
  };

  render() {
    return (
      <div id="app">
        <div id="pomodoro-clock" className="container text-center jumbotron">
          <h1 className="col-12 text-center">
            <strong>Pomodoro Clock</strong>
          </h1>
          <section id="setup" className="row">
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
          <section id="time-stamp">
            <h2 id="time-label">Time</h2>
            <TimeCounter m_timeLeft={this.state.m_timeLeft} />
          </section>
          <section id="terminator">
            <StartStop />
            <ResetBtn />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
