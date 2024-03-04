// AlgoQuestion.js
import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component

const AlgoQuestion = ({ algorithm }) => {
  return (
    <Card className="mt-4"> {/* Bootstrap Card component */}
      <Card.Body>
        <Card.Title>{algorithm}</Card.Title> {/* Algorithm title */}
        <Card.Text>
          {/* Algorithm question */}
          What is the problem statement of {algorithm}? Provide examples if necessary.
        </Card.Text>
        {/* Additional examples or explanations can be added here */}
      </Card.Body>
    </Card>
  );
};

export default AlgoQuestion;
