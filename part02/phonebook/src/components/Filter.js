import React from "react";
import { useState } from 'react'

export const Filter = (props) => {
    const [nameFilter, setNameFilter] = useState('');

    const filterChange = (event) => {
        setNameFilter(event.target.value);
        props.filterPersons(event.target.value);
      };

    return(
        <p>filter shown with <input value={nameFilter} onChange={filterChange}/></p>
    )

}

