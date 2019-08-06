import React from 'react';

export default function Break(props) {
    return (
        <div id='break'>
            <h2 id='break-label'>Break Length</h2>
            <section className='toggle'>
                <img id='break-increment'/>
                <h2 id='break-length' className='length'>{props.m_breakLength}</h2>
                <img id='break-decrement'/>
            </section>
        </div>
    );
}