import React, {useState} from "react";
import Button from "./components/Button";
import AlgoList from "./components/AlgoList";

function App() {

  const initialAlgorithms = ['Algorithm 1', 'Algorithm 2', 'Algorithm 3'];
  const [algorithms, setAlgorithms] = useState(initialAlgorithms);
  const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
  const [currentProblem, setCurrentProblem] = useState('');
  const [newAlgorithmName, setNewAlgorithmName] = useState('');
  

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
    // Logic to select and set new problem
    const randomIndex = Math.floor(Math.random() * algorithms.length);
    setCurrentProblem(algorithms[randomIndex]);
  };

  const handleAddAlgorithm = (algorithmName) => {
    setAlgorithms([...algorithms, algorithmName]);
  };


  const handleAlgorithmClick = (algorithm) => {
    // Logic to handle algorithm click
    console.log('Clicked algorithm:', algorithm);
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
