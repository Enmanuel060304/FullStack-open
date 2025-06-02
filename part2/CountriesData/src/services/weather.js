import axios from "axios"
const API_key = import.meta.env.VITE_WEATHER_API;
console.log(API_key);

const weather = (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.log('la cagaste');
      throw error;
    });
}

export default { weather }
