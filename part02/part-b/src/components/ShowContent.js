import React from "react";
import { useState } from 'react'

export const ShowContent = (props) => {
    return(
        <ul>
            {props.filteredPersons.map(person => <li key={person.name}>{person.name} {person.number} {person.id}</li>)}
        </ul>
    )

}

