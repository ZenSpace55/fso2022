import { useState } from 'react'
import { Filter} from './components/Filter.js'
import { NewPersonForm } from './components/NewPersonForm.js';
import { ShowContent } from './components/ShowContent.js';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '555-233-2423',
      id: 1 },
    { name: 'John Magby',
    number: '335-365-3245',
    id: 2 },
    { name: 'Melissa Rogers',
    number: '326-475-8762',
    id: 3 },
    { name: 'Sarah Hellas',
    number: '555-233-2423',
    id: 4 }
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