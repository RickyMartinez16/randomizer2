// AlgoQuestion.js
import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component

// Define the questions for each algorithm
const algorithmQuestions = {
  isAnagram: 'Given two strings, write a function to determine if the second string is an anagram of the first.',
  'Are All Chars Unique?': 'Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?',
  'Array Pair Sum': 'Given an integer array, output all pairs that sum up to a specific target value.',
  'Find Missing Element': 'Given two arrays, find the missing element from one array in the other.',
  'Largest Continuous Sum': 'Given an array of integers, find the largest continuous sum.',
  'Sentence Reversal': 'Write a function to reverse the words in a sentence.',
  'String Compression': 'Implement a method to perform basic string compression using the counts of repeated characters.',
  'Implement a Stack': 'Implement a stack data structure with push, pop, and peek operations.',
  'Implement a Queue': 'Implement a queue data structure with enqueue and dequeue operations.',
  'Implement a Deque': 'Implement a deque data structure with insertFront, insertRear, deleteFront, deleteRear operations.',
  'Balanced Parentheses': 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
  'Implement a Queue 2 Stacks': 'Implement a queue using two stacks.',
  'Singly List Cycle Check': 'Given a singly linked list, write a function to determine if it has a cycle.',
};

const AlgoQuestion = ({ algorithm }) => {
  // Get the question based on the algorithm name
  const question = algorithmQuestions[algorithm] || `What is the problem statement of ${algorithm}? Provide examples if necessary.`;

  return (
    <Card className="mt-4"> {/* Bootstrap Card component */}
      <Card.Body>
        <Card.Title>{algorithm}</Card.Title> {/* Algorithm title */}
        <Card.Text>
          {/* Render the question */}
          {question}
        </Card.Text>
        {/* Additional examples or explanations can be added here */}
      </Card.Body>
    </Card>
  );
};

export default AlgoQuestion;
