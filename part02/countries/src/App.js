import axios from 'axios';
import { useState, useEffect } from 'react'
import { Search } from './components/Search';
import { ShowContent } from './components/ShowContent';

const App = () => {

const [countries, setCountries] = useState([]);
const [resultCountries, setResultCountries] = useState([]);

  const searchCountries = (searchTerm) => {
    console.log("searched!", searchTerm);
    //console.log(countries);
    const searchResults = countries.filter((myName) => {
      //console.log(myName);
      //console.log("name is: " + JSON.stringify(myName.name));
      return myName.name.official.toLowerCase().includes(searchTerm.toLowerCase());
  });
  setResultCountries(searchResults);
  //console.log(resultCountries);
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
      <p>hey...</p>
      <ShowContent searchResults={resultCountries} searchCountries={searchCountries}/>
    </div>
  )
}

export default App