const PersonForm = ({
  addContact,
  onChangeName,
  onChangeNumber,
  newName,
  number,
}) => {
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={onChangeName} />
      </div>
      <div>
        number: <input value={number} onChange={onChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
