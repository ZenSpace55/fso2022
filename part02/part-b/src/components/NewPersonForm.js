import React from "react";
import { useState } from 'react'

export const NewPersonForm = (props) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newID, setNewID] = useState(5);

    const addName = (event) => {
        event.preventDefault();
        if (props.persons.filter(e => e.name === newName).length === 0){
          console.log("name: ", newName, " unique");
          const people = props.persons.concat([{name: newName, number: newNumber, id: newID}]);
          props.setPersons(people);
          props.setFilteredPersons(people);
          setNewID(newID + 1);
        }
        else{
          console.log("name already exists...");
          window.alert("Name already exists. Please add a unique name.");
        }
        console.log(props.persons);
      }

    const nameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
      }
    
      const numberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
      }

    return(
        <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={nameChange} /></div>
        <div>number: <input value={newNumber} onChange={numberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}