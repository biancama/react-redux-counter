import React from 'react';
import './CounterOutput.css';

const CounterOutput = (props) => (
    
    <div className="CounterOutput">
        CurrentCounter : {props.value}
    </div>
);


export default CounterOutput;
