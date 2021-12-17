import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'

type Submit = FormEvent<HTMLFormElement>
type Event = ChangeEvent<HTMLInputElement>;

interface IPeople {
    firstName: string;
    email: string;
}

const FormsBasics = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: ''
    })
    const [people, setPeople] = useState<IPeople[]>([]);
    const [important, setImportant] = useState<IPeople[]>([]);

    const addToImportanList = (name: string) => {
        let importanArray = people.filter((person) => person.firstName === name);
        setImportant((currentList) => currentList.concat(importanArray))
    }

    const removeImportanList = (name: string) => {
        let newArray = important.filter((person) => person.firstName !== name);
        setImportant(newArray);
    }

    const handleSubmit = (e: Submit) => {
        e.preventDefault();
        if (formData.firstName && formData.email) {
            const person: IPeople = { firstName: formData.firstName, email: formData.email };
            setPeople((people) => {
                return [...people, person];
            });
        } else {
            console.log('Empty values');
        }

        cleanForm();
    }

    const handleChange = (e: Event) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const cleanForm = () => {
        setFormData(
            {
                firstName: '',
                email: ''
            }
        )
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type='submit' >
                    Submit
                </button>
            </form>
            <div>
                <h2>People List</h2>
                {!people.length ? <h4>List Empty</h4> : (
                    people.map((person: IPeople, index: number) => (
                        <div key={index}>
                            <h3>{person.firstName}</h3>
                            <h3>{person.email}</h3>
                            <button type='button' onClick={() => addToImportanList(person.firstName)}>Add to Importan people list</button>
                        </div>
                    ))
                )}
            </div>
            <div>
                <h2>Importan People List</h2>
                {!important.length ? <h4>List Empty</h4> : (
                    important.map((person: IPeople, index: number) => (
                        <div key={index}>
                            <h3>{person.firstName}</h3>
                            <h3>{person.email}</h3>
                            <button type='button' onClick={() => removeImportanList(person.firstName)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default FormsBasics
