import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './features/question'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  return (
    <>
      <button onClick={()=> {
        dispatch(actions.addQuestion({id: 1, name: 'hej'}));
        dispatch(actions.addQuestion({id: 2, name: 'hej då'}));
      }}>add</button>
      {questions.map(question => (
        <div key={question.question.id}>
          <Question question={question.question}/>
          
          </div>
        // <div></div>
      ))}
      <AddQuestion />
    </>
  )
}

export default App
