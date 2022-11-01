import React from 'react';
import Dial from '../Dial/Dial';

const WatchSteps = (props) => {
    return (
        <div style={{ border: '2px solid orange', margin: '10px' }}>
            <h2>Name:{props.name}</h2>
            <p>Number of steps: {props.state}</p>
            <Dial name="Dial" state={props.state}></Dial>

        </div>
    );
};

export default WatchSteps;