import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={() => alert(`Hello, ${name}!`)}>Greet me!</button>
    </div>
  );
}

export default Greeting;