import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
    const [size, setSize] = useState<number>(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('cleanUp')
            window.removeEventListener('resize', checkSize);
        }
    });


    return (
        <div>
            <h2>UseEffect Basic</h2>
            <h3>{size} px</h3>
        </div>
    )
}

export default UseEffectBasic
