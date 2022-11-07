import React from "react";
import { useState } from 'react'

export const Search = (props) => {
    const [searchFilter, setSearchFilter] = useState('');

    const searchChange = (event) => {
        setSearchFilter(event.target.value);
        props.searchCountries(event.target.value);
      };


    return(
        <p>find countries <input value={searchFilter} onChange={searchChange}/></p>
    )
}