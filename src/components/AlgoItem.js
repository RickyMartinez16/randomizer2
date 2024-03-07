import React, { useState } from 'react';

const AlgoItem = ({ algorithm, onAlgorithmClick }) => {
  const [completed, setCompleted] = useState(false);

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