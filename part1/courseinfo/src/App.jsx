import "./App.css";

const Header = ({ course }) => <h1> {course} </h1>;
const Parts = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
const Content = ({ parts }) => {
  return (
    <>
      <Parts part={parts[0]} />
      <Parts part={parts[1]} />
      <Parts part={parts[2]} />
    </>
  );
};
const Total = ({parts}) => {
  const sum = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>the total is {sum} </p>
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const { name } = course;
  const { parts } = course;
  console.log(name);

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
