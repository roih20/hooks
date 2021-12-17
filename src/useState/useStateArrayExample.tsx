import React, { useState } from 'react'

export interface IData {
    id: number;
    name: string
}

export const data: IData[] = [
    {
        id: 1,
        name: 'Rodrigo',
    }, {
        id: 2,
        name: 'Alejandro',
    }, {
        id: 3,
        name: 'Mercedes',
    }, {
        id: 4,
        name: 'Diana',
    }
]


const UseStateArrayExample = () => {
    const [people, setPeople] = useState<IData[]>(data);
    const [listFav, setListFav] = useState<IData[]>([]);

    const removeItem = (id: number) => {
        let newPeopleArray = people.filter((person) => person.id !== id); //new array whose eliminate an id
        setPeople(newPeopleArray);
    }

    const addToFavList = (id: number) => {
        let newFavList = people.filter((person) => person.id === id);
        setListFav((currentList) => currentList.concat(newFavList));
    }

    const removeFavList = (id: number) => {
        let updateFaveList = listFav.filter((favPerson) => favPerson.id !== id);
        setListFav(updateFaveList);
    }
   
    return (
        <div>
            <h2>UseState Array</h2>
            <div>
                {people.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <button type='button' onClick={() => addToFavList(person.id) }>Add to fav list</button>
                        <button type='button' onClick={() => removeItem(person.id)}>Remove item</button>
                    </div>
                ))}
            </div>
            <button type="button" onClick={() => setPeople([])}>Clear items</button>
            <h2>FAV LIST</h2>
            <div>
                {listFav.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <button type='button' onClick={() => removeFavList(person.id)}>Remove Person</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UseStateArrayExample
