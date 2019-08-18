import React from "react";

export function ResetBtn(props) {
  return (
    <div id="reset" onClick={props.resetAll} className='col-1'>
      <div  className='icono-sync'/>
    </div>
  );
}
