import React, { useState } from 'react'

const UseStateCounterExample = () => {
    const [counter, setCounter] = useState<number>(0)
    
    return (
        <div>
            <h2>UseState Counter</h2>
            <h4>{counter}</h4>
            <button type='button' onClick={() => setCounter(counter + 1)}>Increase</button>
            <button type='button' onClick={() => setCounter(counter - 1)}>Decrease</button>
            <button type='button' onClick={() => setCounter(0) }>Reset</button>
        </div>
    )
}

export default UseStateCounterExample;
