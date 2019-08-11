import React from "react";

export function StartStopBtn(props) {
  return (
    <div id="start_stop" className='col-1' onClick={props.handleSwitch}></div>
  );
}
