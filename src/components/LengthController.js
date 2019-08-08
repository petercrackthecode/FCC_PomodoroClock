import React from 'react';

export function LengthController(props) {
    const name= props.id[0].toUpperCase() + props.id.substring(1);
    const id= props.id;
    // 5 minutes jump when increment or decrement
    const sectionStep= 5;
    const m_sessionMax= 60, m_sessionMin= 5;

    const handleIncrement= () => {
        props.handleIncrement(props.id, sectionStep, m_sessionMax);
    };

    const handleDecrement= () => {
        props.handleDecrement(props.id, sectionStep, m_sessionMin);
    };

    return (
        <div id={props.id} className='col-6 text-center'>
            <h2 id={`${id}-label`}>{name} Length</h2>
            <section className='toggle row'>
                <div id={`${id}-increment`} className='button increment' onClick={handleIncrement}/>
                <h2 id={`${id}-length`} className='length'>{props.m_length}</h2>
                <div id={`${id}-decrement`} className='button decrement' onClick={handleDecrement}/>
            </section>
        </div>
    );
}