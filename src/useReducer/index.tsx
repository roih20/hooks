import { type } from 'os';
import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react'
import { IData, data } from '../useState/useStateArrayExample'
import Modals from './Modals';

type Submit = FormEvent<HTMLFormElement>;
type Event = ChangeEvent<HTMLInputElement>

enum ReducerActionsTypes {
    ADD_PEOPLE = 'ADD_PEOPLE',
    VOID = "VOID",
    REMOVE_PERSON = 'REMOVE_PERSON'
}

interface ActionsReducer {
    type: ReducerActionsTypes;
    payload?: any;
}

const reducer = (state: State, action: ActionsReducer) => {
    switch(action.type){
        case ReducerActionsTypes.ADD_PEOPLE:
            const newPeople = [...state.people, action.payload]
            return {...state, people: newPeople, isModalOpen: true, modalContent: 'People Added'}
        case ReducerActionsTypes.VOID:
            return {...state, isModalOpen: true, modalContent: 'Please enter a value'}
        case ReducerActionsTypes.REMOVE_PERSON:
            const removePeople = state.people.filter((person) => person.id !== action.payload)
            return {...state, isModalOpen: true, modalContent: 'Person Removed', people: removePeople};
        default:
            return state;
    }

}

interface State {
    people: IData[];
    isModalOpen: boolean;
    modalContent: string
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const [name, setName] = useState<string>('');

    const handleSubmit = (e: Submit) => {
        e.preventDefault();
        if(name) {
            const newPeople: IData = {id: new Date().getTime(), name}
            dispatch({type: ReducerActionsTypes.ADD_PEOPLE, payload: newPeople})
            setName('');
        }else {
          dispatch({type: ReducerActionsTypes.VOID})
        }
    }

    const handleChange = (e: Event) => {
        
    }

    return (
        <>
        <h2>Use Reducer</h2>
          {state.isModalOpen && <Modals modalContent={state.modalContent}/>}
          <form action="" onSubmit={handleSubmit}>
              <div>
                  <input type="text" value={name} onChange={(e: Event) => setName(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
          </form>
          {state.people.map((person: IData) => (
              <div key={person.id}>
                  <h4>{person.name}</h4>
                  <button onClick={() => dispatch({type: ReducerActionsTypes.REMOVE_PERSON, payload: person.id})}>Remove person</button>
              </div>
          ))}
        </>
    )
}

export default Index
