import {useState, useEffect} from 'react'

interface ICharacter {
    name: string;
    species: string;
    gender: string;
}

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const getCharacters = async () => {
        const response = await fetch(url);
        const characters = await response.json();
        const results = characters.results;
        setCharacters(results);
        setLoading(false)
    }

    useEffect(() => {
        getCharacters()
    }, [url]);

    return {loading, characters};
}
