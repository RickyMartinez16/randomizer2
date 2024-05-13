import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'; // Import Bootstrap Form component
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component

const AlgoForm = ({ addAlgorithmToList }) => {
  const [algorithmName, setAlgorithmName] = useState('');

  // Handler for input change
  const handleChange = (event) => {
    setAlgorithmName(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if algorithm name is not empty
    if (algorithmName.trim() !== '') {
      // Call addAlgorithmToList with the new algorithm name
      addAlgorithmToList(algorithmName);
      // Clear the input field
      setAlgorithmName('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4"> {/* Bootstrap Form component */}
      <Form.Group controlId="formAlgorithm"> {/* Bootstrap Form.Group component */}
        <Form.Control
          type="text"
          value={algorithmName}
          onChange={handleChange}
          placeholder="Enter algorithm name"
        /> {/* Bootstrap Form.Control component */}
      </Form.Group>
      <Button variant="primary" type="submit">Add Algorithm</Button> {/* Bootstrap Button component */}
    </Form>
  );
};

export default AlgoForm;

