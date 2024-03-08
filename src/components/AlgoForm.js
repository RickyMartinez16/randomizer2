// AlgorithmForm.js

import React, { useState } from 'react';

const AlgoForm = ({ onAddAlgorithm }) => {
  const [algorithmName, setAlgorithmName] = useState('');

  const handleChange = (event) => {
    setAlgorithmName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (algorithmName.trim() !== '') {
      onAddAlgorithm(algorithmName);
      setAlgorithmName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={algorithmName}
        onChange={handleChange}
        placeholder="Enter algorithm name"
      />
      <button type="submit">Add Algorithm</button>
    </form>
  );
};

export default AlgoForm;