import React, { useState } from 'react';

function GreetingComponent() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" value={name} onChange={handleInputChange} />

      {name && <p>Hello {name}!</p>}
    </div>
  );
}

export default GreetingComponent;