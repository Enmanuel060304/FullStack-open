import axios from "axios";


const baseUrl =
    "https://studies.cs.helsinki.fi/restcountries/api/all";


const getAllCountries = () => {
    return axios.get(baseUrl)
    .then((response) => {
        return response.data;
    })
}

const getCountryByName = (name) => {
    return axios.get(`${baseUrl}/${name}`)
    .then((response) => {
        return response.data;
    })
}

export default { getAllCountries, getCountryByName };