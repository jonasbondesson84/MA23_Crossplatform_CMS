import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { actions } from './features/question'

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=> {
        dispatch(actions.addQuestion({id: 1, name: 'hej'}))
      }}>add</button>
      
    </>
  )
}

export default App
