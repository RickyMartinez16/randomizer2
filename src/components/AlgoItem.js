import React, { useState, useEffect } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms }) => {
  // Initialize completed state based on whether the algorithm is in the completed algorithms list
  const [completed, setCompleted] = useState(completedAlgorithms.includes(algorithm));

  // Update completed state when completedAlgorithms prop changes
  useEffect(() => {
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);

  // Toggle completed state when the item is clicked
  const handleClick = () => {
    // Toggle the completed state
    setCompleted(!completed);
    // Call the onAlgorithmClick handler with the algorithm name
    onAlgorithmClick(algorithm);
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;

