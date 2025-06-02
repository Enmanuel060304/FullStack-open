const Notificacion = ( { message, type } ) => {
  if (!message) {
    return null;
  }

    const notificationStyle = {
        color: type === 'error' ? 'red' : 'green',
        backgroundColor: type === 'error' ? '#f8d7da' : '#d4edda',
        border: `1px solid ${type === 'error' ? '#f5c6cb' : '#c3e6cb'}`,
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    };

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notificacion;