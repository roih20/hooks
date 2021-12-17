import React from 'react'
import { useFetch } from './useFetch'

const url = 'https://rickandmortyapi.com/api/character'

const CustomHooks = () => {
    const {loading, characters} = useFetch(url);
    console.log(characters);
    return (
        <div>
            <h2>Custom hook</h2>
            <h3>{loading ? 'Loading...' : 'Data'}</h3>
             <div>
                 {characters.map((character, index: number) => (
                     <div key={index}>
                         <h4>Name: {character.name}</h4>
                         <h4>Species: {character.species}</h4>
                         <h4>Gender: {character.gender}</h4>
                     </div>
                 ))}
             </div>
        </div>
    )
}

export default CustomHooks
