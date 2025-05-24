import Part from "./Part";

const Content = ({ course }) => {
  const { parts } = course;

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        total of{" "}
        {parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}
      </p>
    </>
  );
};

export default Content;
