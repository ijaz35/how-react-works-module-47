import React, { useEffect, useState } from 'react';
import WatchSteps from '../WatchSteps/WatchSteps';

const SmartWatch = () => {
    const [steps, setSteps] = useState(0)
    const increaseCount = () => {
        setSteps(steps + 1)
        console.log(steps)
    }
    useEffect(() => {
        console.log('hello')
    }, [steps])
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h4>My step Count:{steps}</h4>
            <button onClick={increaseCount}>give step </button>
            <WatchSteps name="nobody" state={steps}></WatchSteps>

        </div>
    );
};

export default SmartWatch;