import "./App.css";

const App = ({ notes }) => {
  return (
    <ol>
      {notes.map((note) => (
        <li key={note.id}>
          {note.content}
        </li>
      ))}
    </ol>
  );
};

export default App;
