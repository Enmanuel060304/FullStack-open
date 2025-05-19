import { useState } from "react";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0);
  const [isActive, setisActive] = useState(false);
  // const handleClick = () => setCounter(counter + 1);
  const handleActive = () => setisActive(!isActive);

  const Display = ({ children, isActive , onClick}) => {
    return(
      <>
        {
          isActive ? (
            <div>
              <p>{children} </p>
              <button onClick={onClick}>desactivar</button>
            </div>
          )
          :
          (
            <p>please active</p>
          )
        }
      </>
    )
  }

  return (
    <>
      <div>
        <button onClick={handleActive}>click me to active</button>
        <Display isActive={isActive} onClick={handleActive}>hola mundo</Display>
        {/* <button onClick={handleClick}>click me to plus 1</button> */}
      </div>
    </>
  );
}

export default App;
