import axios from 'axios';
import { useState, useEffect } from 'react'
import { Filter} from './components/Filter.js'
import { NewPersonForm } from './components/NewPersonForm.js';
import { ShowContent } from './components/ShowContent.js';
import bookService from './services/bookEntry.js'

const App = () => {
  const [persons, setPersons] = useState([

  ])

  const [filteredPersons, setFilteredPersons] = useState(persons);

  const filterPersons = (myFilter) => {
    console.log("filtering people...");
    const filteredNames = persons.filter((myName) => {
        return myName.name.toLowerCase().includes(myFilter);
    });
    setFilteredPersons(filteredNames);
    console.log(filteredPersons);
  }

  useEffect(() => {
    console.log("effect");
    /*axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data);
        setFilteredPersons(response.data);
      })*/
    bookService.getAll()
    .then(response => {
      setPersons(response.data);
      setFilteredPersons(response.data);
    })
    
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} filterPersons={filterPersons}/>
      <NewPersonForm persons={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons}/>
      <h2>Numbers</h2>
      <ShowContent filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App