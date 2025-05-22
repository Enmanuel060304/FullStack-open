import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;
const Button = ({ onClick, typeButton }) => (
  <button onClick={onClick}>{typeButton}</button>
);
const StaticLine = ({ text, value }) => (
  <p>
    {text} {value}{" "}
  </p>
);

const Statistics = ({ buttons }) => {
  let {neutral, good, bad} = buttons;
  let summ = good + bad + neutral;
  let average = summ / 3;
  let positive = (good / summ) * 100;

  if (summ === 0) {
    return (
      <>
        <h1>no feedback given</h1>
      </>
    );
  }

  return (
    <>
      <Header title="statistics" />
      <StaticLine text="good" value={good} />
      <StaticLine text="neutral" value={neutral} />
      <StaticLine text="bad" value={bad} />
      <StaticLine text="average" value={average} />
      <StaticLine text="all" value={summ} />
      <StaticLine text="postive" value={`${positive}%`} />
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [buttons, setButtons] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickGood = () => {
    const newButtons = {
      ...buttons,
      good: buttons.good + 1,
    };
    setButtons(newButtons);
  }; 
  
  const onClickNeutral = () => {
    const newButtons = {
      ...buttons,
      neutral: buttons.neutral + 1,
    };
    setButtons(newButtons);
  };

   const onClickBad = () => {
    const newButtons = {
      ...buttons,
      bad: buttons.bad + 1,
    }
    setButtons(newButtons);
  };

  return (
    <>
      <Header title="give feedback" />
      <div>
        <Button onClick={onClickGood} typeButton="good" />
        <Button onClick={onClickNeutral} typeButton="neutral" />
        <Button onClick={onClickBad} typeButton="bad" />
      </div>
      <div>
        <Statistics buttons={buttons}/>
      </div>
    </>
  );
};

export default App;
