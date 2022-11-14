import React from "react";
import { useState, useEffect } from 'react'

const api_key = process.env.REACT_APP_API_KEY;



export const ShowContent = (props) => {

    useEffect(() => {
        console.log("HELP PLEASE!");
        console.log(props.searchResults.length, " results...");
        if (props.searchResults.length == 1){
            console.log("GET WEATHER");
            props.setWeather(props.searchResults[0]);
        }
    }, [props.searchResults]);
    //props.setWeather("")
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
            //props.setWeather(result)
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
                <h2>Weather in {result.capital}</h2>
            </div>
        )
        }
    }

}

