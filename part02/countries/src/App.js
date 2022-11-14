import axios from 'axios';
import { useState, useEffect } from 'react'
import { Search } from './components/Search';
import { ShowContent } from './components/ShowContent';
import { ShowWeather } from './components/ShowWeather';

const App = () => {

const [countries, setCountries] = useState([]);
const [resultCountries, setResultCountries] = useState([]);
const [weatherString, setWeatherString] = useState(' ');
const api_key = process.env.REACT_APP_API_KEY;

  const searchCountries = (searchTerm) => {
    console.log("searched!", searchTerm);
    const searchResults = countries.filter((myName) => {
      return myName.name.official.toLowerCase().includes(searchTerm.toLowerCase());
  });
  setResultCountries(searchResults);
  }

  const setWeather = (country) => {
    console.log("getting weather for ", country);
    setWeatherString(country);
  }


  useEffect(() => {
    console.log("effect");
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response);
        setCountries(response.data);
        setResultCountries(response.data);
      })
  }, [])

  return (
    <div>
      < Search searchCountries={searchCountries} />
      <ShowContent searchResults={resultCountries} searchCountries={searchCountries} setWeather={setWeather}/>
      <ShowWeather weather={weatherString} />
    </div>
  )
}

export default App