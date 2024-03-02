import React, { useEffect, useState } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick, completedAlgorithms, isCurrentProblem }) => {
  const [completed, setCompleted] = useState(completedAlgorithms.includes(algorithm));

  useEffect(() => {
    setCompleted(completedAlgorithms.includes(algorithm));
  }, [completedAlgorithms, algorithm]);

  const handleClick = () => {
    if (isCurrentProblem) { // Only handle click if it's the current problem
      setCompleted(prevCompleted => !prevCompleted);
      onAlgorithmClick(algorithm);
    }
  };

  return (
    <li onClick={handleClick} style={{ textDecoration: completed ? 'line-through' : 'none', cursor: isCurrentProblem ? 'pointer' : 'default' }}>
      {algorithm}
    </li>
  );
};

export default AlgoItem;




