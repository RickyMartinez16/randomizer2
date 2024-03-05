import React, { useState, useEffect } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms }) => {
  // State variable to track completion status of the algorithm
  const [completed, setCompleted] = useState(false);

  // Effect to update completion status when completedAlgorithms or algorithm changes
  useEffect(() => {
    // Check if the algorithm is in the completed algorithms list
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);

  // Handler for clicking on the algorithm item
  const handleClick = () => {
    // Toggle completion status
    setCompleted(!completed);
    // Call the onAlgorithmClick handler to mark the algorithm as completed
    onAlgorithmClick(algorithm);
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;
