// AlgoQuestion.js
import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component

// Define the questions for each algorithm along with examples
const algorithmQuestions = {
    isAnagram: 'Given two strings, write a function to determine if the second string is an anagram of the first. Example: "anagram", "nagaram" => true',
    'Are All Chars Unique?': 'Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? Example: "abcdefg" => true, "hello" => false',
    'Array Pair Sum': 'Given an integer array, output all pairs that sum up to a specific target value. Example: [1, 3, 2, 2], 4 => [[1, 3], [2, 2]]',
    'Find Missing Element': 'Given two arrays, find the missing element from one array in the other. Example: [1, 2, 3, 4, 5], [1, 2, 4, 5] => 3',
    'Largest Continuous Sum': 'Given an array of integers, find the largest continuous sum. Example: [1, 2, -1, 3, 4, -1] => 9',
    'Sentence Reversal': 'Write a function to reverse the words in a sentence. Example: "The quick brown fox" => "fox brown quick The"',
    'String Compression': 'Implement a method to perform basic string compression using the counts of repeated characters. Example: "aabcccccaaa" => "a2b1c5a3"',
    'Implement a Stack': 'Implement a stack data structure with push, pop, and peek operations. Example: Push 1, Push 2, Pop => 2, Peek => 1',
    'Implement a Queue': 'Implement a queue data structure with enqueue and dequeue operations. Example: Enqueue 1, Enqueue 2, Dequeue => 1',
    'Implement a Deque': 'Implement a deque data structure with insertFront, insertRear, deleteFront, deleteRear operations. Example: insertFront 1, insertRear 2, deleteRear => 2',
    'Balanced Parentheses': 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. Example: "()[]{}" => true, "([)]" => false',
    'Implement a Queue 2 Stacks': 'Implement a queue using two stacks. Example: Enqueue 1, Enqueue 2, Dequeue => 1',
    'Singly List Cycle Check': 'Given a singly linked list, write a function to determine if it has a cycle. Example: list = [3,2,0,-4], pos = 1 => true',
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
