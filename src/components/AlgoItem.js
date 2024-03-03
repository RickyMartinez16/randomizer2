import React, { useEffect, useState } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms }) => {
  // Initialize completed state based on whether the algorithm is in the completed algorithms list
  const [completed, setCompleted] = useState(completedAlgorithms.includes(algorithm));

  // Update completed state when completedAlgorithms prop changes
  useEffect(() => {
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);

  // Handle click event
  const handleClick = () => {
    // Toggle the completed state
    setCompleted(prevCompleted => !prevCompleted);
    // Call the onAlgorithmClick handler with the algorithm name
    onAlgorithmClick(algorithm);
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none', cursor: completed ? 'default' : 'pointer' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;



