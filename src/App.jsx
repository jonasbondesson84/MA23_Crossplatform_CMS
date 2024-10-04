
import './App.css'
import {  useSelector } from 'react-redux'

import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
import ShowQuestions from './components/ShowQuestions';
import { useState } from 'react';
function App() {
  
  const questions = useSelector(state => state.questions);
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className='content'>
    <button onClick={() => setShowQuestions(!showQuestions)}>{showQuestions ? "Add questions" : "Show Questions"}</button>
      {showQuestions &&  <ShowQuestions />}

      
      
      
     {!showQuestions &&  <AddQuestion />}
    </div>
  )
}

export default App
