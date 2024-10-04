import {  useDispatch, useSelector } from 'react-redux'

import Question from './Question'


const ShowQuestions = () => {

    const questions = useSelector(state => state.questions);
    const answers = useSelector(state => state.answers);
    const dispatch = useDispatch();

    const saveAnswer = () => {
        // dispatch()
    }
    return ( 
        <div className="show-question center-content">
            {questions.map((question, index) => (
        <div key={index}>
            
          <Question question={question.question} index={index} numberOfQuestions={questions.length}/>
          
          </div>
        
      ))}
      <button onClick={() => saveAnswer()}>Submit</button>
        </div>
     );
}
 
export default ShowQuestions;