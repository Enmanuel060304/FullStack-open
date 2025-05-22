import { useState } from "react";
import './App.css'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    rigth: 0
  })

  const handelRigthClick = () => {
    const newCliks = {
      ...clicks,
      rigth: clicks.rigth + 1      
    }

    setClicks(newCliks)
  }

  const handelLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1

    }
    setClicks(newClicks)
  }

  const View = ({clicks}) => {
    return(
      <>
        <p>
          contador de left {clicks.left}
        </p>
        <p>
          contador de rigth {clicks.rigth}
        </p>
      </>
    )
  }

  console.log({clicks});
  return (
    <div>
      <button onClick={handelLeftClick}>
        left
      </button>
      <button onClick={handelRigthClick}>
        rigth
      </button>
      <View clicks={clicks} />
    </div>
  )
}

export default App;