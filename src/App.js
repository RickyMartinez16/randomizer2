import React, { useState } from "react";
import Button from "react-bootstrap/Button"; // Import Bootstrap Button component
import AlgoList from "./components/AlgoList";
import AlgoForm from "./components/AlgoForm";

function App() {
  const initialAlgorithms = ['isAnagram', 'reverse string', 'unique element'];
  const [algorithms, setAlgorithms] = useState(initialAlgorithms);
  const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
  const [currentProblem, setCurrentProblem] = useState('');
  
  const handleAlgorithmCompletion = (algorithm) => {
    setCompletedAlgorithms([...completedAlgorithms, algorithm]);
  };

  const handleResetList = () => {
    setAlgorithms(initialAlgorithms);
    setCompletedAlgorithms([]);
    setCurrentProblem('');
  };

  const handleNewProblem = () => {
    const availableAlgorithms = algorithms.filter(algorithm => !completedAlgorithms.includes(algorithm));
    if (availableAlgorithms.length === 0) {
      setCurrentProblem('All done!');
    } else {
      const randomIndex = Math.floor(Math.random() * availableAlgorithms.length);
      setCurrentProblem(availableAlgorithms[randomIndex]);
    }
  };

  const handleAddAlgorithm = (algorithmName) => {
    setAlgorithms([...algorithms, algorithmName]);
  };

  return (
    <div className="container mt-5"> {/* Bootstrap container class */}
      <h1 className="mb-4">Algo Practice</h1> {/* Bootstrap margin bottom class */}
      <div className="d-flex justify-content-between mb-3"> {/* Bootstrap flexbox classes */}
        <Button variant="primary" onClick={handleNewProblem}>New Problem</Button> {/* Bootstrap Button component */}
        <Button variant="secondary" onClick={handleResetList}>Reset List</Button> {/* Bootstrap Button component */}
      </div>
      <AlgoList 
        algorithms={algorithms} 
        onAlgorithmClick={handleAlgorithmCompletion}
        completedAlgorithms={completedAlgorithms}
        onAddAlgorithm={handleAddAlgorithm}
      />
      {currentProblem && <div className="alert alert-info mt-3">{currentProblem}</div>} {/* Bootstrap alert component */}
      <AlgoForm onAddAlgorithm={handleAddAlgorithm} />
    </div>
  );
}

export default App;

