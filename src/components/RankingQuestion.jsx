import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion, deleteQuestion } from '../features/question';

import { TYPE } from "./AddQuestion";
import { addAnswer } from "../features/answers";

const RankingQuestion = ({setHideType, setType}) => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const answerslist = useSelector(state => state.answers);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [numberOfOptions, setNumberofOptions] = useState(3);
    const [options, setOptions] = useState(Array(numberOfOptions).fill(''));
    
    const InputFields = () => {
        return Array.from({length: numberOfOptions}).map((_item, index) => (
                <div key={index}>
                    <input type="text" 
                        placeholder={`Answer ${index +1}`} 
                        defaultValue={options[index]}
                        onBlur={e => handleChange(e, index)}
                        />
                    
                </div>
        ))
    }
    const handleChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    }

    const handleIncrease = () => {
        if(numberOfOptions<10) {
            setNumberofOptions(numberOfOptions+1);
            setOptions([...options, '']);
        }
    }
    const handleDecrease = () => {
        if(numberOfOptions>2) {
            setNumberofOptions(numberOfOptions-1);
            setOptions(options.slice(0, -1));
        }
    }

    const newItem = () => {

        const lastQuestion = questions[questions.length -1];
        const newID = lastQuestion ? lastQuestion.question.id + 1 : 1;
        // const newQuestion = {type: "text", id: newID, title: title, body: body};

        return {type: TYPE.RANKING, id: newID, title: title, body: body, options: options}
    }

    const newAnswer = () => {
        const lastAnswer = answerslist[answerslist.length -1];
        const newId = lastAnswer ? lastAnswer.answer.id +1 : 1;

        return {type: TYPE.RANKING, id: newId, questionID: newId, answer: ''}
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
        </div>
     );
}
 
export default RankingQuestion;