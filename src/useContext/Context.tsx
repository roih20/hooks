import React, { useContext, useState } from 'react'
import { data, IData } from '../useState/useStateArrayExample';

interface ContextState {
    people: IData[];
    removePerson: (id: number) => void
}

const PersonContext = React.createContext({} as ContextState);


const Context = () => {
    const [people, setPeople] = useState(data)
    const removePerson = (id: number) => {
        let removePerson = people.filter((person) => person.id !== id);
        setPeople(removePerson);
    }
    return (
        <div>
            <PersonContext.Provider value={{removePerson, people}}>
                <h3>Use Context</h3>
                <List />
            </PersonContext.Provider>
            
        </div>
    )
}

const List = () => {
    const mainData = useContext(PersonContext)
    return (
        <>
        {mainData.people.map((person) => (
            <SinglePerson key={person.id} {...person}/>
        ))}
        </>
    );
}

const SinglePerson = ({ id, name}: IData) => {
    const {removePerson} = useContext(PersonContext)
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove person</button>
        </div>
    )
}

export default Context
