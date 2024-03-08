// AlgoList.js

import React from 'react';
import AlgoItem from './AlgoItem';
import AlgoForm from './AlgoForm';

const AlgoList = ({ algorithms, completedAlgorithms, onAlgorithmClick, handleNewProblem, onAddAlgorithm }) => {
  return (
    <div className="algo-list">
      <h2>Algorithm List</h2>
      <AlgoForm onAddAlgorithm={onAddAlgorithm} />
      <ul>
        {algorithms.map((algorithm, index) => (
          <AlgoItem
            key={index}
            algorithm={algorithm}
            completed={completedAlgorithms.includes(algorithm)}
            onAlgorithmClick={onAlgorithmClick}
            completedAlgorithms={completedAlgorithms}
          />
        ))}
      </ul>
      <button onClick={handleNewProblem}>New Problem</button>
    </div>
  );
};

export default AlgoList;
