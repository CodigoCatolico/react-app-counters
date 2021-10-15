import React from 'react';

function RemoveCounter({ deleteCounter }) {
  return <button onClick={deleteCounter}>Remover Counter</button>;
}

export default RemoveCounter;
