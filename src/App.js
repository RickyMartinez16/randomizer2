import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AlgoList from "./components/AlgoList";
import AlgoForm from "./components/AlgoForm";

function App() {
  // Initial state for algorithms list, completed algorithms, and current problem
  const initialAlgorithms = ['isAnagram', 'reverse string', 'unique element'];
  const [algorithms, setAlgorithms] = useState(initialAlgorithms);
  const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
  const [currentProblem, setCurrentProblem] = useState('');
  
  // Handler for marking algorithm as completed
  const handleAlgorithmCompletion = (algorithm) => {
    setCompletedAlgorithms([...completedAlgorithms, algorithm]);
  };

  // Handler for resetting the algorithm list
  const handleResetList = () => {
    setAlgorithms(initialAlgorithms);
    setCompletedAlgorithms([]);
    setCurrentProblem('');
  };

  // Handler for selecting new problem
  const handleNewProblem = () => {
    // Filter out completed algorithms
    const availableAlgorithms = algorithms.filter(algorithm => !completedAlgorithms.includes(algorithm));
    // Check if all algorithms are completed
    if (availableAlgorithms.length === 0) {
      setCurrentProblem('All done!');
    } else {
      // Select a random problem from available algorithms
      const randomIndex = Math.floor(Math.random() * availableAlgorithms.length);
      setCurrentProblem(availableAlgorithms[randomIndex]);
    }
  };

  // Handler for adding a new algorithm
  const handleAddAlgorithm = (algorithmName) => {
    setAlgorithms([...algorithms, algorithmName]);
  };

  return (
    <div className="container mt-5">
      {/* Title with center alignment */}
      <h1 className="text-center mb-4">Algo Practice</h1>
      {/* Buttons for new problem and reset list */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleNewProblem}>New Problem</Button>
        <Button variant="secondary" onClick={handleResetList}>Reset List</Button>
      </div>
      {/* AlgoList component */}
      <AlgoList 
        algorithms={algorithms} 
        onAlgorithmClick={handleAlgorithmCompletion}
        completedAlgorithms={completedAlgorithms}
        onAddAlgorithm={handleAddAlgorithm}
      />
      {/* Conditional rendering for alert color */}
      {currentProblem && 
        <Alert variant={currentProblem === 'All done!' ? 'success' : 'warning'} className="mt-3">
          {currentProblem}
        </Alert>
      }
      {/* AlgoForm component */}
      <AlgoForm onAddAlgorithm={handleAddAlgorithm} />
    </div>
  );
}

export default App;

