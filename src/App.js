import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AlgoList from "./components/AlgoList";
import AlgoForm from "./components/AlgoForm";
import AlgoQuestion from './components/AlgoQuestion';

function App() {
  // Initial state for algorithms list, completed algorithms, and current problem
  let initialAlgorithms = [

  ];
  const fetchData = async() => {
    var response =  await fetch("http://localhost:4000/algorithms")
    return response.json()
  }
  const [algorithms, setAlgorithms] = useState(initialAlgorithms);
  useEffect(() => {
    fetchData().then((data) => {
      setAlgorithms(data.map(d=> d.algorithm_name))
      console.log(initialAlgorithms)
    })
  },[initialAlgorithms, algorithms])
  const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
  const [currentProblem, setCurrentProblem] = useState('');
  
// Handler for marking algorithm as completed
const handleAlgorithmCompletion = (algorithm) => {
  setCompletedAlgorithms([...completedAlgorithms, algorithm]);
  
  // Check if all algorithms are completed
  const allCompleted = algorithms.every(algo => completedAlgorithms.includes(algo));
  if (allCompleted) {
    setCurrentProblem('');
  }
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
      <h1 className="text-center mb-4">Algo Practice</h1>
      {/* Buttons for new problem and reset list */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={handleNewProblem}>New Problem</Button>
        <Button variant="secondary" onClick={handleResetList}>Reset List</Button>
      </div>
      {/* Conditional rendering for alert color */}
      {currentProblem && 
        <Alert variant={algorithms.length === completedAlgorithms.length ? 'success' : 'warning'} className="mt-3">
        {algorithms.length === completedAlgorithms.length ? 'All done!' : currentProblem}
        </Alert>
      }
      {/* AlgoList component */}
      <AlgoList 
        algorithms={algorithms} 
        onAlgorithmClick={handleAlgorithmCompletion}
        completedAlgorithms={completedAlgorithms}
        onAddAlgorithm={handleAddAlgorithm}
        currentProblem={currentProblem} // Pass the current problem to AlgoList
      />
      {/* AlgoQuestion component with algorithm prop */}
      {currentProblem && currentProblem !== 'All done!' && <AlgoQuestion algorithm={currentProblem} />}
      {/* AlgoForm component */}
    {/*<AlgoForm onAddAlgorithm={handleAddAlgorithm} />*/}
    </div>
  );
}

export default App;
