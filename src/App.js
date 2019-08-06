import {LengthController} from './components/LengthController.js';
import "./styles/App.css";

import React from "react";

class App extends React.Component {
  state = {
    m_sessionLength: 25,
    m_breakLength: 5,
  };

  render() {
    return (
      <div id="app">
        <div id='pomodoro-clock'>
          <h1>Pomodoro Clock</h1>
          <LengthController id='break' m_length={this.state.m_breakLength}/>
          <LengthController id='session' m_length={this.state.m_sessionLength}/>
        </div>
      </div>);
  }
}

export default App;
