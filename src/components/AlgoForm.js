import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'; // Import Bootstrap Form component
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component

const AlgoForm = ({ onAddAlgorithm }) => {
  const [algorithmName, setAlgorithmName] = useState('');

  const handleChange = (event) => {
    setAlgorithmName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (algorithmName.trim() !== '') {
      onAddAlgorithm(algorithmName);
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
