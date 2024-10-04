import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion, deleteQuestion } from '../features/question';

import { TYPE } from "./AddQuestion";
import { addAnswer } from "../features/answers";

const MultiChoiceQuestion = ({setHideType, setType}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [numberOfAnswers, setNumberofAnswers] = useState(2);
    const [answers, setAnswers] = useState(Array(numberOfAnswers).fill(''));
    const [rightAnswer, setRightAnswer] = useState('')

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const answerslist = useSelector(state => state.answers);

    
    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        

        return {type: TYPE.MULTI, id: newID, title: title, body: body, options: answers, rightAnswer: rightAnswer}
    }

    const newAnswer = () => {
        const lastAnswer = answerslist[answerslist.length -1];
        const newId = lastAnswer ? lastAnswer.answer.id +1 : 1;

        return {type: TYPE.MULTI, id: newId, questionID: newId, answer: ''}
    }

    const InputFields = () => {
        return Array.from({length: numberOfAnswers}).map((_item, index) => (
                <div key={index}>
                    {/* <input type="text" value={rightAnswer} onChange={e => setRightAnswer(e.target.value)}/> */}
                    <input type="text" 
                        placeholder={`Answer ${index +1}`} 
                        // value={answers[index]}
                        defaultValue={answers[index]}
                        onBlur={e => handleChange(e, index)}
                        //  onChange={(e) => handleChange(e, index)}
                        />
                    
                    {/* <input type="radio" name="" id="" onChange={e => handleRightAnswer(index)}/> */}
                </div>
        ))
    }
    const handleRightAnswer = (index) => {
        const answer= answers[index];
        setRightAnswer(answer);
    }

    const handleChange = (e, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    }

    const handleIncrease = () => {
        if(numberOfAnswers<10) {
            setNumberofAnswers(numberOfAnswers+1);
            setAnswers([...answers, '']);
        }
    }
    const handleDecrease = () => {
        if(numberOfAnswers>2) {
            setNumberofAnswers(numberOfAnswers-1);
            setAnswers(answers.slice(0, -1));
        }
    }
    const handleSave = () => {
        dispatch(addQuestion(newItem()));
        dispatch(addAnswer(newAnswer()));
        setHideType(false);
        setType(0);
    }
    const handleCancel = () => {
        setHideType(false);
        setType(0);
    }

    
    return ( 
        <section className="question">
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="text-field"/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={e => setBody(e.target.value)} placeholder="Question" className="text-area"/>
            </div>
            
            <div className="input-fields">
                <InputFields />
                
            </div>
            <div>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
            <div>
                <button className="saveQuestion" onClick={() => handleSave()}>Save</button>
                <button className="deleteQuestion button" onClick={() => handleCancel()}>Cancel</button>
            </div>
        </section>
     );
}
 
export default MultiChoiceQuestion;