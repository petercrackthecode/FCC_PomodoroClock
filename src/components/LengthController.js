import React from 'react';

export function LengthController(props) {
    const name= props.id[0].toUpperCase() + props.id.substring(1);
    const id= props.id;
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