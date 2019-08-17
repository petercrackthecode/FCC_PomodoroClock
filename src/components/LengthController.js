import React from "react";

export function LengthController(props) {
  const name = props.m_id[0].toUpperCase() + props.m_id.substring(1);
  const m_id = props.m_id;
  // 1 minutes jump when increment or decrement
  const sectionStep = 1;
  const m_sessionMax = 60,
    m_sessionMin = 1;

  const handleIncrement = () => {
    props.handleIncrement(m_id, sectionStep, m_sessionMax);
  };

  const handleDecrement = () => {
    props.handleDecrement(m_id, sectionStep, m_sessionMin);
  };

  return (
    <div id={m_id} className="col-6">
      <h2 id={`${m_id}-label`} className="text-info">
        {name} Length
      </h2>
      <section className="toggle row">
        <div
          id={`${m_id}-increment`}
          className="button increment btn-info btn-lg"
          onMouseDown={handleIncrement}
        />
        <h2 id={`${m_id}-length`} className="length">
          {props.m_length}
        </h2>
        <div
          id={`${m_id}-decrement`}
          className="button decrement btn-info btn-lg"
          onMouseDown={handleDecrement}
        />
      </section>
    </div>
  );
}
