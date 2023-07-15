import React from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import { useState, useEffect } from 'react';
//import axios from 'axios';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
      
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber
    };

    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
    });
    
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) => 
    person.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  const handleDelete = (deletedPerson) => {
    try {
      const deletePerson = window.confirm(`Delete ${deletedPerson.name}?`);
      if (deletePerson) {
        personService.remove(deletedPerson.id);
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
        setMessage({ content: `Deleted ${deletedPerson.name}.`, isError: false });
      }
    } catch (error) {
      setMessage({
        content: `Error deleting ${deletedPerson.name}: ${error.message}`,
        isError: true,
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} ondelete={handleDelete}/>
      
    </div>
  );
}

export default App;
