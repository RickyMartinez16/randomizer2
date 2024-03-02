import React, { useEffect, useState } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms, isCurrentProblem }) => {
  // State to track whether the algorithm is completed
  const [completed, setCompleted] = useState(completedAlgorithms.includes(algorithm));

  // Effect to update completed state when completedAlgorithms prop changes
  useEffect(() => {
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);

  // Handler for handling click on the algorithm item
  const handleClick = () => {
    // Only handle click if it's the current problem
    if (isCurrentProblem) {
      // Toggle completed state
      setCompleted(prevCompleted => !prevCompleted);
      // Call onAlgorithmClick handler with the algorithm
      onAlgorithmClick(algorithm);
    }
  };

  return (
    // Render list item with click handler and styling based on completion and current problem status
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none', cursor: isCurrentProblem ? 'pointer' : 'default' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;




