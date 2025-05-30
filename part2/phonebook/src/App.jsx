import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);

  //Data
  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log("fullfiled")
      const data = response.data;

      setPersons(data);
    }
    )
  }, []);

  //states
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [textFilter, setTextFilter] = useState("");

  //handle actions
  const addContact = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNumber("");
      return;
    }
    const newPerson = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };
    setNumber("");
    setNewName(" ");
    setPersons([...persons, newPerson]);
  };

  //onChange
  const onChangeNumber = (event) => setNumber(event.target.value);

  const onChangeName = (event) => setNewName(event.target.value);

  const onFilter = (event) => setTextFilter(event.target.value);

  const filteredPersons =
    textFilter.trim() === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(textFilter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={textFilter} onChange={onFilter} />

      <h3>add a new</h3>
      <PersonForm
        addContact={addContact}
        onChangeName={onChangeName}
        onChangeNumber={onChangeNumber}
        newName={newName}
        number={number}
      />

      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Persons key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
