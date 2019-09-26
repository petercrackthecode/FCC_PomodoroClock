import React from "react";

export function StartStopBtn(props) {
  return (
    <div
      id="start_stop"
      className={`node ${props.isPaused ? '' : 'active'}`}
      onClick={props.handleSwitch}
    ></div>
  );
}
