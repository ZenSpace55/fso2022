import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
let displayWeather = false;
let temp = "";

export const ShowWeather = (props) => {
  let myWeather = "";

    useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${props.weather.capital},${props.weather.cca2}&APPID=${api_key}`)
      .then(response => {
        console.log(response.data);
        myWeather = response.data;
        displayWeather = true;
        temp = Math.round(myWeather.main.temp - 272.15);
        console.log("WEATHER IS", myWeather.main.temp);
        console.log("DELIVERED", displayWeather);
      })
      .catch(()=> {
        console.log("No Weather Available...");
      })
        console.log("update please...");
    }, [props.weather])

    if(displayWeather){
      return(<><p>Temperature: {temp}</p></>)
    }
    else{
      return(
        <><p>No weather</p>
        <p>{myWeather}</p></>
      )
    }

}

