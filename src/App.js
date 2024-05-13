import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AlgoList from "./components/AlgoList";
import AlgoForm from "./components/AlgoForm";
import AlgoQuestion from './components/AlgoQuestion';

function App() {

const fetchData = async () => {
  const response = await fetch("http://localhost:4000/algorithms");
  return response.json();
};

const [algorithms, setAlgorithms] = useState([]);

useEffect(() => {
  fetchData().then((data) => {
    setAlgorithms(data);
  });
}, []);

const [completedAlgorithms, setCompletedAlgorithms] = useState([]);
const [currentProblem, setCurrentProblem] = useState('');



const selectRandomUnsolvedAlgorithm = () => {
  const unsolvedAlgorithms = algorithms.filter(algorithm => !completedAlgorithms.includes(algorithm.algorithm_name));
  if (unsolvedAlgorithms.length === 0) {
    setCurrentProblem('All done!');
  } else {
    const randomIndex = Math.floor(Math.random() * unsolvedAlgorithms.length);    
    setCurrentProblem(unsolvedAlgorithms[randomIndex]);
  }
};

const markAlgorithmAsComplete = (algorithm) => {
  setCompletedAlgorithms([...completedAlgorithms, algorithm]);
  const allCompleted = algorithms.every(algo => completedAlgorithms.includes(algo));
  if (allCompleted) {
    setCurrentProblem('');
  }
};

const resetAlgorithmList = () => {
  setCompletedAlgorithms([]);
  fetchData().then((data) => {
    setAlgorithms(data);
    setCurrentProblem('');
  });
};
 
const addAlgorithmToList = (algorithmName) => {
  setAlgorithms([...algorithms, algorithmName]);
};




  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Algo Practice</h1>
      {/* Buttons for new problem and reset list */}
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={selectRandomUnsolvedAlgorithm}>
          New Problem
        </Button>
        <Button variant="secondary" onClick={resetAlgorithmList}>
          Reset List
        </Button>
      </div>
      {/* Conditional rendering for alert color */}
      {currentProblem && (
        <Alert
          variant={
            algorithms.length === completedAlgorithms.length
              ? "success"
              : "warning"
          }
          className="mt-3"
        >
          {algorithms.length === completedAlgorithms.length
            ? "All done!"
            : currentProblem.algorithm_name}
        </Alert>
      )}
      {/* AlgoList component */}
      <AlgoList
        algorithms={algorithms}
        markAlgorithmAsComplete={markAlgorithmAsComplete}
        completedAlgorithms={completedAlgorithms}
        addAlgorithmToList={addAlgorithmToList}
        currentProblem={currentProblem}
      />
      {/* AlgoQuestion component with algorithm prop */}
      {currentProblem && currentProblem !== 'All done!' && (
        <AlgoQuestion
          algorithm_name={currentProblem.algorithm_name}
          question={currentProblem.question}
          example={currentProblem.example}
        />
      )}
      
      {/* AlgoForm component */}
      {/*<AlgoForm addAlgorithmToList={handleAddAlgorithm} />*/}
    </div>
  );
}

export default App;
