import { type } from 'os';
import React, { FormEvent, useRef } from 'react'

type Submit = FormEvent<HTMLFormElement>

const UseRefBasics = () => {
    const refContainer = useRef<any>(null);

    const handleSubmit = (e: Submit) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                   <input type="text" ref={refContainer}/>  
                   <button type="submit">Submit</button>
                </div>                
            </form>
        </div>
    )
}

export default UseRefBasics
