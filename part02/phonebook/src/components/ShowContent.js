import React from "react";
import { useState } from 'react';
import bookService from '../services/bookEntry.js';

export const ShowContent = (props) => {

    return(
        <ul>
            {props.filteredPersons.map(person => <li key={person.name}>{person.name} {person.number} {person.id} <button onClick={
                () => {
                    bookService.deleteEntry(person.id).then(props.refresh)
                    props.setErrormessage(`${person.name} removed...`)
                    setTimeout(() => {
                      props.setErrormessage(null)}, 5000)
                }}>Delete</button></li>)}
        </ul>
    )

}

