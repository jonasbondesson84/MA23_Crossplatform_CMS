import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../features/question'

const MultiChoiceQuestion = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [numberOfAnswers, setNumberofAnswers] = useState(2);
    const [answers, setAnswers] = useState(Array(numberOfAnswers).fill(''));
    const [rightAnswer, setRightAnswer] = useState('')

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    
    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        // const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: "multi", id: newID, title: title, body: body, answers: answers, rightAnswer: rightAnswer}
    }

    const InputFields = () => {
        return Array.from({length: numberOfAnswers}).map((_item, index) => (
                <div key={index}>
                    <input type="text" 
                        placeholder={`Answer ${index +1}`} 
                        defaultValue={answers[index]}
                        onBlur={e => handleChange(e, index)}
                        />
                    <input type="radio" name="" id="" onChange={e => handleRightAnswer(index)}/>
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

    
    return ( 
        <section className="question">
            <div><input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="title"/></div>
            <div><input type="text" value={body} onChange={e => setBody(e.target.value)} className="text-body" placeholder="Question"/></div>
            
            <div className="input-fields">
                <InputFields />
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
     );
}
 
export default MultiChoiceQuestion;