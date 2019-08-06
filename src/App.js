import Break from './components/Break.js';
import Session from './components/Session.js';
import "./styles/App.css";

import React from "react";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div id="app">
        <div id='pomodoro-clock'>
          <h1>Pomodoro Clock</h1>
          <Break/>
          <Session/>
        </div>
      </div>);
  }
}

export default App;
