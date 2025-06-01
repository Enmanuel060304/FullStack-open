import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const edit = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data);

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then(response => response.data)

const add = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data);

export default { getAll, edit, remove, add };


  // const duplicate = persons.find((person) => person.name.trim() === newName.trim());

  // if (duplicate) {
  //   const confirmMessage = `${newName} is already added to phonebook. Replace the old number with a new one?`;

  //   if (window.confirm(confirmMessage)) {
  //     const updatedContact = {
  //       ...duplicate,
  //       number: number,
  //     };

  //     phonebookServices
  //       .edit(duplicate.id, updatedContact)
  //       .then((returnedPerson) => {
  //         setPersons(persons.map((p) =>
  //           p.id === returnedPerson.id ? returnedPerson : p
  //         ));
  //         alert(`${returnedPerson.name} ha sido actualizado`);
  //         setNumber("");
  //         setNewName("");
  //       })
  //       .catch(() => {
  //         alert(`No se pudo actualizar el contacto: ${duplicate.name}`);
  //       });
  //   }

  //   return; // ¡Importante! Para no continuar y crear duplicados