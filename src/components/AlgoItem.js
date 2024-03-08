import React, { useState } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick }) => {
  const [completed, setCompleted] = useState(false);

  // Check if the algorithm is in the completed algorithms list
  const isCompleted = completed || completedAlgorithms.includes(algorithm);

  const handleClick = () => {
    setCompleted(!completed);
    onAlgorithmClick(algorithm);
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;