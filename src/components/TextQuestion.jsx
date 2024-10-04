import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";
import { addQuestion, updateQuestion, deleteQuestion } from '../features/question';

import { TYPE } from "./AddQuestion";

import { addAnswer } from "../features/answers";

const TextQuestion = ({setHideType, setType}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const answerslist = useSelector(state => state.answers);

    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        // const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: TYPE.TEXT, id: newID, title: title, body: body, answer: ''}
    }

    const newAnswer = () => {
        const lastAnswer = answerslist[answerslist.length -1];
        const newId = lastAnswer ? lastAnswer.answer.id +1 : 1;

        return {type: TYPE.TEXT, id: newId, questionID: newId, answer: ''}
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
            
            <button className="saveQuestion button" onClick={() => handleSave()
                
                }>Save</button>
            <button className="deleteQuestion button" onClick={() => handleCancel()}>Cancel</button>
        </section>
     );
}
 
export default TextQuestion;