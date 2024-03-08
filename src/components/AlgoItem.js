import React, { useState, useEffect } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Check if the algorithm is in the completed algorithms list
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);


  const handleClick = () => {
    setCompleted(!completed);
    onAlgorithmClick(algorithm);
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;