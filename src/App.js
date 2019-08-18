import { LengthController } from "./components/LengthController.js";
import { StartStopBtn as StartStop } from "./components/StartStopBtn.js";
import { ResetBtn } from "./components/ResetBtn.js";
import "./styles/App.css";

import * as fn from './HelperFunctions.js'

import React from "react";

const defaultState= {
  m_sessionLength: 25,
  m_breakLength: 5,
  m_timeLeft: "25:00",
  m_isClockRunning: false,
  m_isSessionRunning: true,
  m_alarmColor: {
    color: 'black',
  },
};

class App extends React.Component {
  state = defaultState;

  playSound = async () => {
    const audio= document.getElementById('beep');
    if (!audio) return;
    audio.currentTime= 0;
    audio.play();
  };

  resetAll=  async () => {
    await clearInterval(this.clockTick);

    console.log("reset button is clicked");

    await this.setState(defaultState);
  }

  reduceTimeLeft= async () => {
    const seconds= fn.timeStringToSecond(this.state.m_timeLeft) - 1;
    let newTime= null;

    if (seconds === -1) {
      await this.setState(prevState => ({
        m_isSessionRunning: !prevState.m_isSessionRunning,
        m_alarmColor: {
          color: 'black',
        },
      }));

      newTime= fn.secondToTimeString((this.state.m_isSessionRunning ?
                                        this.state.m_sessionLength :
                                        this.state.m_breakLength) * 60);

      await this.setState({
        m_timeLeft: fn.formatTime(newTime)
      });
    }
    else {
      if (seconds === 0) {
        await this.setState({
          m_alarmColor: {
            color: 'red'
          },
        });
        await this.playSound();
      }
      else {
        await this.setState({
          m_alarmColor: {
            color: 'black'
          }
        });
      }

      newTime= fn.secondToTimeString(seconds);

      await this.setState({
        m_timeLeft: fn.formatTime(newTime),
      });
    }
  }

  handleLimitIncrease = async (type = "", step, upperLimit) => {
    console.log("state.m_isClockRunning in " +
      type + " section is " + this.state.m_isClockRunning);
    if (!this.state.m_isClockRunning) {
      switch (type) {
        case "break":
          const newBreakLength = this.state.m_breakLength + step;
          if (newBreakLength <= upperLimit) {
            await this.setState({ m_breakLength: newBreakLength });

            if (!this.state.m_isSessionRunning) {
              await this.setState({
                m_timeLeft: fn.formatTime(fn.secondToTimeString(newBreakLength * 60))
              });
            }
          }
          break;
        case "session":
          const newSessionLength = this.state.m_sessionLength + step;
          if (newSessionLength <= upperLimit) {
            await this.setState({ m_sessionLength: newSessionLength });

            if (this.state.m_isSessionRunning) {
              await this.setState({
                m_timeLeft: fn.formatTime(fn.secondToTimeString(newSessionLength * 60)),
              });
            }
          }
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
          if (newBreakLength >= lowerLimit) {
            await this.setState({ m_breakLength: newBreakLength });

            if (!this.state.m_isSessionRunning) {
              await this.setState({
                m_timeLeft: fn.formatTime(fn.secondToTimeString(newBreakLength * 60))
              });
            }
          }
          break;
        case "session":
          const newSessionLength = this.state.m_sessionLength - step;
          if (newSessionLength >= lowerLimit) {
            await this.setState({ m_sessionLength: newSessionLength });

            if (this.state.m_isSessionRunning) {
              await this.setState({
                m_timeLeft: fn.formatTime(fn.secondToTimeString(newSessionLength * 60)),
              });
            }
          }
          break;
        default:
          break;
      }
    }
  };

  handleSwitch = async () => {
    await this.setState(prevState => ({
      m_isClockRunning: !prevState.m_isClockRunning
    }));

    if (this.state.m_isClockRunning)
      this.clockTick= await setInterval(this.reduceTimeLeft, 1000);
    else clearInterval(this.clockTick);
  };

  render() {
    return (
      <div id="app">
        <div id="pomodoro-clock" className="container jumbotron">
          <h1 className="col-12">
            <strong>Pomodoro Clock</strong>
          </h1>
          <section id="setup" className="row">
            <LengthController
              m_id="break"
              m_length={this.state.m_breakLength}
              handleIncrement={this.handleLimitIncrease}
              handleDecrement={this.handleLimitDecrease}
            />
            <LengthController
              m_id="session"
              m_length={this.state.m_sessionLength}
              handleIncrement={this.handleLimitIncrease}
              handleDecrement={this.handleLimitDecrease}
            />
          </section>
          <section id="time-stamp" style={this.state.m_alarmColor}>
            <h2 id="timer-label">{this.state.m_isSessionRunning ? "Session" : "Break"}</h2>
            <div id="time-left">{this.state.m_timeLeft}</div>
          </section>
          <section id="terminator" className='container'>
            <StartStop handleSwitch={this.handleSwitch}/>
            <ResetBtn resetAll={this.resetAll}/>
          </section>
        </div>
        <audio id='beep' preload='auto' src="https://goo.gl/65cBl1"/>
      </div>
    );
  }
}

export default App;
