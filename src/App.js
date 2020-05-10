import React, {useState} from 'react';
import Flashcardlist from './Flashcardlist';
import "./app.css"

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
      <Flashcardlist flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "What is stonks?",
    answer: "good",
    options: [
      "bad",
      "good",
      "suk",
      "not good"
    ]
  }    
]

export default App;