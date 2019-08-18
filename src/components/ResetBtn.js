import React from "react";

export function ResetBtn(props) {
  return (
    <div id="reset" onClick={props.resetAll} className='node col-md-1'>
      <div  className='icono-sync'/>
    </div>
  );
}
