import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react';
import bookService from '../services/bookEntry.js';

export const NewPersonForm = (props) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newID, setNewID] = useState('');

    const addName = (event) => {
        
        event.preventDefault();
        const nameObject = {
          name: newName,
          number: newNumber,
        }

          bookService.create(nameObject)
          .then(response => {
            console.log(response);
            const people = props.persons.concat(response.data);
            props.setPersons(people);
            props.setFilteredPersons(people);
          })

          setNewID(newID + 1);
 /*       if (props.persons.filter(e => e.name === newName).length === 0){
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
        */
      }

    const nameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
      }
    
      const numberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
      }

      useEffect(() => {
        console.log("effect");
        let myID = 0;
        console.log("length of data array: ", props.persons.length);
        for (let i = 0; i < props.persons.length; i++){
          if (props.persons[i].id >= myID){
            myID = props.persons[i].id + 1;
          }
        };
        console.log("ID IS: ", myID);

      }, [,]);

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