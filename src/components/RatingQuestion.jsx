import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion, deleteQuestion } from '../features/question';
import {CiStar} from 'react-icons/ci'
import { TYPE } from "./AddQuestion";
import { addAnswer } from "../features/answers";

const RatingQuestion = ({setHideType, setType}) => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const answerslist = useSelector(state => state.answers);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [numberOfStars, setNumberOfStars] = useState(5);

    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        // const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: TYPE.RATING, id: newID, title: title, body: body, numberOfStars: numberOfStars}
    }

    const newAnswer = () => {
        const lastAnswer = answerslist[answerslist.length -1];
        const newId = lastAnswer ? lastAnswer.answer.id +1 : 1;

        return {type: TYPE.RATING, id: newId, questionID: newId, answer: ''}
    }

    const Stars = () => {
        return Array.from({length: numberOfStars}).map((_, index) => (
            <div key={index}>
                <CiStar className="star"/>
            </div>
        ))
    }

    const handleIncrease = () => {
        if(numberOfStars<10) {
            setNumberOfStars(numberOfStars+1);
            
        }
    }
    const handleDecrease = () => {
        if(numberOfStars>5) {
            setNumberOfStars(numberOfStars-1);
            
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
        <div>
        <section className="question">
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="text-field"/>
            </div>
            
            <div>
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={e => setBody(e.target.value)} placeholder="Question" className="text-area"/>
            </div>
            <div className="stars">
                <Stars />
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
        </div>
     );
}
 
export default RatingQuestion;