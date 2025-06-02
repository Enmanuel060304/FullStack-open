import CountryView from "./Country";

const CountryList = ({ countries, show, setShow }) => {
  return (
    <ul>
      {countries.map((data) => (
        <li key={data.cca3}>
          {data.name.common}
          {show === data.cca3 ? (
            <>
              <CountryView country={data} />
              <button onClick={() => setShow(null)}>Hide</button>
            </>
          ) : (
            <button onClick={() => setShow(data.cca3)}>Show</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
