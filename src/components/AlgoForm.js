import React, { useState } from 'react';

const AlgoForm = ({ onAddAlgorithm }) => {
  // State variable to track the input value
  const [algorithmName, setAlgorithmName] = useState('');

  // Handler for input change
  const handleChange = (event) => {
    setAlgorithmName(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Trim the algorithm name and check if it's not empty
    if (algorithmName.trim() !== '') {
      // Call the onAddAlgorithm handler with the algorithm name
      onAddAlgorithm(algorithmName);
      // Clear the input field after adding the algorithm
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
