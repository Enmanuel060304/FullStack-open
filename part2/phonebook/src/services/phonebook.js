import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const edit = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data);

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then(response => response.data)

const add = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data);

export default { getAll, edit, remove, add };
