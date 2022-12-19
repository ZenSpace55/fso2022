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

        let nameExists = props.persons.find(person => person.name == nameObject.name);
        console.log(nameExists);

        if (nameExists){
          if (window.confirm("Name already exists, update number?")){
            console.log("update number");
            bookService.update(nameExists.id, nameObject)
            .then(response => {
              console.log(response);
              const updatedPersons = props.persons.map(person => {
                if (person.id === nameExists.id) {
                  return response.data;
                }
                return person;
              });
              props.setPersons(updatedPersons);
              props.setFilteredPersons(updatedPersons);
            })
          }
          else{
            console.log("didn't update");
          }
        }

        else{
          bookService.create(nameObject)
          .then(response => {
            console.log(response);
            const people = props.persons.concat(response.data);
            props.setPersons(people);
            props.setFilteredPersons(people);
          })
        }

          setNewID(newID + 1);
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