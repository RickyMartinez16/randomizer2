import React from 'react';
import Card from 'react-bootstrap/Card'; 


const AlgoQuestion = ({ algorithm_name, question, example }) => {


  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{algorithm_name}</Card.Title>
        <Card.Text>{question}</Card.Text>
        <Card.Text>Example: {example}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlgoQuestion;