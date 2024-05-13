import React from 'react';
import AlgoItem from './AlgoItem';

const AlgoList = ({ algorithms, completedAlgorithms, markAlgorithmAsComplete, addAlgorithmToList, currentProblem }) => {
  
  return (
    <div className="algo-list">
      <h2>Algorithm List</h2> 
      <ul>
        {algorithms.map((algorithm, index) => (
          <AlgoItem
            key={index}
            algorithmName={algorithm.algorithm_name}
            isAlgorithmCompleted={completedAlgorithms.includes(algorithm.algorithm_name)} //currently not using
            markAlgorithmAsComplete={markAlgorithmAsComplete}
            completedAlgorithms={completedAlgorithms}
            isCurrentProblem={algorithm.algorithm_name === currentProblem.algorithm_name}
          />
        ))}
      </ul>
    </div>
  );
};

export default AlgoList;

