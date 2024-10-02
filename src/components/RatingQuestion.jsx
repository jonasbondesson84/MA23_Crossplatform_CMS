import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../features/question'
import {CiStar} from 'react-icons/ci'

const RatingQuestion = () => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [numberOfStars, setNumberOfStars] = useState(5);

    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        // const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: "rating", id: newID, title: title, body: body, numberOfStars: numberOfStars}
    }

    const Stars = () => {
        return Array.from({length: numberOfStars}).map((_, index) => (
            <div key={index}>
                <CiStar/>
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

    return ( 
        <div>
        <section className="question">
            <div><input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="title"/></div>
            <div><input type="text" value={body} onChange={e => setBody(e.target.value)} className="text-body" placeholder="Question"/></div>
            <div className="stars">
                <Stars />
            </div>
            <div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            </div>
            <div>
            <button className="saveQuestion" onClick={() => dispatch(actions.addQuestion(newItem()))
                
                }>Save</button>
            <button className="deleteQuestion">Delete</button>
            </div>
        </section>
        </div>
     );
}
 
export default RatingQuestion;