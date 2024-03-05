import React, { useState } from "react";
import Button from "./components/Button";
import AlgoList from "./components/AlgoList";

function App() {
  // Initial list of algorithms
  const initialAlgorithms = ['isAnagram', 'reverse string', 'unique element'];

  // State variables
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

    if (availableAlgorithms.length === 0) {
      setCurrentProblem('All done!');
    } else {
      const randomIndex = Math.floor(Math.random() * availableAlgorithms.length);
      setCurrentProblem(availableAlgorithms[randomIndex]);
    }
  };

  // Handler for adding a new algorithm
  const handleAddAlgorithm = (algorithmName) => {
    setAlgorithms([...algorithms, algorithmName]);
  };

  // Handler for shuffling the list of algorithms
  const handleRandomizeAlgorithms = () => {
    const shuffledAlgorithms = [...algorithms].sort(() => Math.random() - 0.5);
    setAlgorithms(shuffledAlgorithms);
  };

  return (
    <div>
      <h1>Algo Practice</h1>
      <Button onClick={handleRandomizeAlgorithms}>Randomize Algorithms</Button>
      <Button onClick={handleResetList}>List Reset</Button>
      <Button onClick={handleNewProblem}>New Problem</Button>
      <AlgoList 
        algorithms={algorithms} 
        onAlgorithmClick={handleAlgorithmCompletion}
        completedAlgorithms={completedAlgorithms}
        handleNewProblem={handleNewProblem}
        onAddAlgorithm={handleAddAlgorithm}
      />
      {currentProblem && <div>Current Problem: {currentProblem}</div>}
    </div>
  );
}

export default App;

