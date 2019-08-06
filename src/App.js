import { LengthController } from "./components/LengthController.js";
import "./styles/App.css";

import React from "react";

const sectionType = {
  INCREMENT: "increase",
  DECREMENT: "decrease"
};

class App extends React.Component {
  state = {
    m_sessionLength: 25,
    m_breakLength: 5
  };

  handleLimit = async (type = null, step, limit) => {
    switch (type) {
      case sectionType.INCREMENT:
        break;
      case sectionType.DECREMENT:
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
          <LengthController id="break" m_length={this.state.m_breakLength} />
          <LengthController
            id="session"
            m_length={this.state.m_sessionLength}
          />
        </div>
      </div>
    );
  }
}

export default App;
