import React from "react";

export function StartStopBtn(props) {
  return (
    <div id="start_stop" className='node' onClick={props.handleSwitch}></div>
  );
}
