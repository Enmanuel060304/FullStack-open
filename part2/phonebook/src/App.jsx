import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookServices from "./services/phonebook";
import Notificacion from "./components/Notificacion";

const App = () => {
  //states
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [textFilter, setTextFilter] = useState("");
  const [error, setError] = useState({ message: null, type: null });

  //Data
  useEffect(() => {
    phonebookServices.getAll().then((response) => setPersons(response));
  }, []);

  //handle actions
  const addContact = (event) => {
    event.preventDefault();

    //verify if the name is duplicated
    const isDuplicated = persons.find(
      (person) => person.name.trim() === newName.trim()
    );

    if (isDuplicated) {
      const confirmMessage = `${newName} is already added to phonebook. Replace the old number with a new one?`;
      if (window.confirm(window.confirm(confirmMessage))) {
        const persona = {
          ...isDuplicated,
          number: number,
        };
        phonebookServices
          .edit(isDuplicated.id, persona)
          .then((returned) => {
            setPersons(
              persons.map((p) => (p.id === isDuplicated.id ? returned : p))
            );
            setNewName("");
            setNumber("");
          })
          .catch((error) =>
            console.error("algo malo paso y no pudimos resolverlo", error)
          );
      }
      return;
    }

    const newPerson = {
      name: newName.trim(),
      number: number,
      id: uuidv4(),
    };

    phonebookServices.add(newPerson).then((response) => {
      setPersons([...persons, response]);

      setNumber("");
      setNewName("");

      setError({
        message: `${response.name} ha sido agregado`,
        type: "success",
      });
      setTimeout(() => {
        setError({ message: null, type: null });
      }, 5000);
    });
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

  const onDelete = (id) => {
    const maje = persons.find((p) => p.id === id);
    if (window.confirm(`estas segure que quieres eliminar a ${maje.name}`)) {
      phonebookServices
        .remove(id)
        .then(() => {
          const nuevas = persons.filter((person) => person.id !== id);

          setError({
            message: `${maje.name} ha sido eliminado`,
            type: "error",
          });
          setTimeout(() => {
            setError({ message: null, type: null });
          }, 5000);

          setPersons(nuevas);
        })
        .catch((error) => {
          
          console.error("algo malo paso y no pudimos resolverlo", error);
          setError({
            message: `No se pudo eliminar a ${maje.name}. Tal vez ya no existe`,
            type: "error",
          });
          setTimeout(() => {
            setError({ message: null, type: null });
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notificacion message={error.message} type={error.type} />
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
        <Persons key={person.id} person={person} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default App;
