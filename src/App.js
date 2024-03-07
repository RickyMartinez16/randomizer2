import React, {useState} from "react";
import Button from "./components/Button";
import AlgoList from "./components/AlgoList";

function App() {

  const algorithms = ['Algorithm 1', 'Algorithm 2', 'Algorithm 3'];


  // State variables
  const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
  const [currentProblem, setCurrentProblem] = useState('');

  // Handler for marking algorithm as completed
  const handleAlgorithmCompletion = (algorithm) => {
    setCompletedAlgorithms([...completedAlgorithms, algorithm]);
  };

  // Handler for selecting new problem
  const handleNewProblem = () => {
    // Logic to select and set new problem
    const randomIndex = Math.floor(Math.random() * algorithms.length);
    setCurrentProblem(algorithms[randomIndex]);
  };


  const handleAlgorithmClick = (algorithm) => {
    // Logic to handle algorithm click
    console.log('Clicked algorithm:', algorithm);
  };

  return (
    <div>
    <h1>Algo Practice</h1>
      <AlgoList 
        algorithms={algorithms} 
        onAlgorithmClick={handleAlgorithmCompletion}
        completedAlgorithms={completedAlgorithms}
        handleNewProblem={handleNewProblem}
      />
    </div>
  );
}

export default App;
