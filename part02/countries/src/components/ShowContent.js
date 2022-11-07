import React from "react";
import { useState } from 'react'

export const ShowContent = (props) => {
    if (props.searchResults.length > 10){
        return <p>too many results, please be more specific...</p>
    }
    else if (props.searchResults.length <= 10 && props.searchResults.length > 1){
        return(
            <ul>
                {props.searchResults.map(country => <li key={country.name.official}>{country.name.official}<button onClick={() => props.searchCountries(country.name.official)}>click me</button></li>)}
            </ul>
            )
        }
    else{
        let result = props.searchResults[0];
        console.log("result is ", result);
        if (result){
            console.log("languages: ", Object.values(result.languages));
        return(
            <div>
                <h1>{result.name.official}</h1>
                <p>capital {result.capital}</p>
                <p>area {result.area}</p>

                <h2>languages: </h2>   
                <p>{result.languages.values}</p>
                <ul>
                    {Object.values(result.languages).map(language => <li key={language}>{language} </li>)}
                </ul>
                <img src={result.flags.png}></img>
            </div>
        )
        }
    }

}

