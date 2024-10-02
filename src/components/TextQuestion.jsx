import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";
import { actions } from '../features/question'

const TextQuestion = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: "text", id: newID, title: title, body: body}
    }

    return ( 
        <section className="question">
            <div><input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="title"/></div>
            <div><input type="text" value={body} onChange={e => setBody(e.target.value)} className="text-body" placeholder="Question"/></div>
            <button onClick={() => console.log(questions)}>klick</button>
            <button className="saveQuestion" onClick={() => dispatch(actions.addQuestion(newItem()))
                
                }>Save</button>
            <button className="deleteQuestion">Delete</button>
        </section>
     );
}
 
export default TextQuestion;