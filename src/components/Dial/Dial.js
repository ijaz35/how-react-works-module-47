import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '10px' }}>
            <h2>This is {props.name}</h2>
            <p>steps so far:{props.state} </p>
        </div>
    );
};

export default Dial;