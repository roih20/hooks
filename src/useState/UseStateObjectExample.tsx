import React, { useState } from 'react'

interface IPerson  {
    name: string
    age: number
    message: string
}

const UseStateObjectExample = () => {
    const [person, setPerson] = useState<IPerson>({
        name: 'Rodrigo',
        age: 21,
        message: 'Random message'
    });
    
    return (
        <div>
            <h2>UseState Object</h2>
            <h4>{person.name}</h4>
           <h4>{person.age}</h4>
           <h4>{person.message}</h4>
           <button type='button' onClick={() => setPerson({...person, message: `Hello My name is ${person.name} `})}>Change Message</button>
        </div>
    )
}

export default UseStateObjectExample;
