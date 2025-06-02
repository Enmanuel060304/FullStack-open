import { useState, useEffect } from "react";
import "./App.css";
import countryService from "./services/country";
import CountryView from "./components/Country";
import weatherService from "./services/weather";

function App() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(null);
  const [weather, setWeather] = useState(null);

  const onChange = (event) => {
    setNewCountry(event.target.value);
    console.log(newCountry);

    const filtered = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    if (event.target.value === "") {
      setFilteredCountries([]);
      return;
    }
    console.log(filtered);

    setFilteredCountries(filtered);
    console.log(filteredCountries);
  };

  useEffect(() => {
    countryService.getAllCountries().then((countries) => {
      console.log(countries);
      setCountries(countries);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (filteredCountries.length === 1) {
      const capital = filteredCountries[0].capital;
      weatherService
      .weather(capital)
      .then((data) => {
        setWeather(data)
        console.log(data)
      })
    } else {
      setWeather(null);
    }
  }, [filteredCountries]);

  if (loading) {
    return <p>cargando paises...</p>;
  }

  return (
    <>
      <h1>Countries</h1>
      find countries
      <input type="text" onChange={onChange} value={newCountry} />
      {filteredCountries.length === 1 && (
        <section>
          <CountryView country={filteredCountries[0]} />
          <p>
            {
              weather
              ? (
                <>
                <h2>Weather in {filteredCountries[0].capital}</h2>
                  <p>
                      temp {weather.main.temp}
                  </p>
                  <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                  <p>
                      wind {weather.wind.speed} m/s            
                  </p>
                </>
              )
              : "cargando clima"
            }
          </p>
        </section>
      )}
      {filteredCountries.length > 10 && (
        <p>too many matches, specify another filter</p>
      )}
      {filteredCountries.length > 1 &&
        filteredCountries.length <= 10 &&
        filteredCountries.map((data) => (
          <li key={data.cca3}>
            {data.name.common}

            {show === data.cca3 ? (
              <CountryView country={data} />
            ) : (
              <button onClick={() => setShow(data.cca3)}>Show</button>
            )}

            {show === data.cca3 && (
              <button onClick={() => setShow(null)}>Hide</button>
            )}
          </li>
        ))}
    </>
  );
}

export default App;
