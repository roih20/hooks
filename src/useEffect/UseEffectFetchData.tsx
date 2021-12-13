import React, { useEffect, useState } from 'react'

const url: string = 'https://api.github.com/users';

interface IUsers {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;

}

const UseEffectFetchData = () => {
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    }

    return (
        <div>
            <h2>Fetch Data</h2>
            <ul>
            {
                users.map((user) => (
                    <>
                       <li key={user.id}>
                           <img src={user.avatar_url} alt={user.login} />
                           <div>
                               <h4>{user.login}</h4>
                               <a href={user.html_url}>Profile</a>
                           </div>
                       </li>
                    </>
                ))
            }
            </ul>
        </div>
    )
}

export default UseEffectFetchData
