import React, { useState } from 'react'

 const UseStateBasic = () => {
    const initialState: string = 'Random Title';
    const [text, setText] = useState<string>(initialState);
    const [showText, setShowText] = useState<boolean>(false)

    const handleClick = () => {
        if(text === initialState){
            setText('Hello World');
        }else { 
            setText(initialState);
        }
        
    }

    const handleShow = () => {
      setShowText((prev) => !prev);
    }


    return (
       <>
        <h1>{text}</h1>
       
        <button type='button' onClick={handleClick}>Change Title</button>
        {
            showText && (
                <h2>This is a hidden text</h2>
            )
        }
        <button type='button' onClick={handleShow}>{showText ? 'Hide the text' : 'Show the hidden text'}</button>
       </>
    );
}

export default UseStateBasic;
