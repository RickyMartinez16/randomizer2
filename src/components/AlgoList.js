import React from 'react';
import AlgoItem from './AlgoItem'; // Import AlgoItem component

const AlgoList = ({ algorithms, completedAlgorithms, onAlgorithmClick, onAddAlgorithm }) => {
  return (
    <div className="algo-list">
      <h2>Algorithm List</h2> {/* Title for the algorithm list */}
      <ul>
        {/* Map through the algorithms array to render AlgoItem components */}
        {algorithms.map((algorithm, index) => (
          <AlgoItem
            key={index} // Unique key for each AlgoItem
            algorithm={algorithm} // Pass algorithm name as prop
            completed={completedAlgorithms.includes(algorithm)} // Check if algorithm is completed
            onAlgorithmClick={onAlgorithmClick} // Handler for clicking on an algorithm
            completedAlgorithms={completedAlgorithms} // Pass completed algorithms as prop
          />
        ))}
      </ul>
    </div>
  );
};

export default AlgoList; // Export AlgoList component
