import React, { useEffect, useState } from 'react';

const AlgoItem = ({ algorithmName, markAlgorithmAsComplete, isAlgorithmCompleted, isCurrentProblem, completedAlgorithms }) => {
  
  const [completed, setCompleted] = useState(completedAlgorithms.includes(algorithmName));

  useEffect(() => {
    setCompleted(completedAlgorithms.includes(algorithmName));
  }, [completedAlgorithms, algorithmName]);


const crossOutAlgorithm = () => {
  if (isCurrentProblem) {
    setCompleted(prevCompleted => !prevCompleted);
    markAlgorithmAsComplete(algorithmName);
  }
};



  return (
    // Render list item with click handler and styling based on completion and current problem status
    <li onClick={crossOutAlgorithm} style={{ textDecoration: completed ? 'line-through' : 'none', cursor: isCurrentProblem ? 'pointer' : 'default' }}>
      {algorithmName}
    </li>
  );
};

export default AlgoItem;





