import React from 'react';

export function LengthController(props) {
    const name= props.id[0].toUpperCase() + props.id.substring(1);
    const id= props.id;
    // 5 minutes jump when increment or decrement
    const sectionStep= 5;
    const m_sessionMax= 60, m_sessionMin= 5;

    const handleIncrement= () => {
        props.handleIncrement(sectionStep, m_sessionMax);
    };

    const handleDecrement= () => {
        props.handleDecrement(sectionStep, m_sessionMin);
    };

    return (
        <div id={props.id}>
            <h2 id={`${id}-label`}>{name} Length</h2>
            <section className='toggle'>
                <img id={`${id}-increment`}/>
                <h2 id={`${id}-length`} className='length'>{props.m_length}</h2>
                <img id={`${id}-decrement`}/>
            </section>
        </div>
    );
}