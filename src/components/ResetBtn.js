import React from "react";

export function ResetBtn(props) {
  return (
    <div id="reset" onClick={props.resetAll}>
      <div  className='icono-sync'/>
    </div>
  );
}
