import React from 'react';
import AlgoItem from './AlgoItem';

const AlgoList = ({ algorithms, onAlgorithmClick, handleNewProblem }) => {
  return (
    <div className="algo-list">
      <h2>Algorithm List</h2>
      <ul>
        {algorithms.map((algorithm, index) => (
          <AlgoItem key={index} algorithm={algorithm} onAlgorithmClick={onAlgorithmClick} />
        ))}
      </ul>
      <button onClick={handleNewProblem}> New Problem</button>
    </div>
  );
};

export default AlgoList;