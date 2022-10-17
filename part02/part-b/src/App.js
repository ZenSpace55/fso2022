import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '555-233-2423',
      id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newID, setNewID] = useState(2);

  const addName = (event) => {
    event.preventDefault();
    if (persons.filter(e => e.name === newName).length === 0){
      console.log("name: ", newName, " unique");
      setPersons(persons.concat([{name: newName, number: newNumber, id: newID}]));
      setNewID(newID + 1);
    }
    else (console.log("name already exists..."));
    console.log(persons);
  }

  const nameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const numberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={nameChange} /></div>
        <div>number: <input value={newNumber} onChange={numberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <li key={person.name}>{person.name} {person.number} {person.id}</li>)}
      </ul>
    </div>
  )
}

export default App