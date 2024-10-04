import { useState } from "react";
import { TYPE } from "./AddQuestion";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion, deleteQuestion } from "../features/question";
import { updateAnswer } from "../features/answers";
import {CiStar} from 'react-icons/ci'


const Question = ({question, numberOfQuestions, index}) => {

    let content = null;
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const answersList = useSelector(state => state.answers);
    
    const saveAnswer = () => {
        const id = question.id;
        dispatch(updateQuestion({id, answer}))
       
    }

    const saveAnswerInList = (index, answer) => {
        const id = index;
        dispatch(updateAnswer({id, answer}));
       
    }
    const Options = ({options, questionId}) => {
        
        return Array.from({length: options.length}).map((_, index) => (
            <div key={index} >
                <button className="option-button" onClick={() => {
                    const answer = options[index];
                    saveAnswerInList(questionId, answer)
                    }}>{options[index]}</button>
                {/* <input type="radio" name="anwer" id={options[index]} value={options[index]} 
                onChange={e => 
                    
                    saveAnswerInList(questionId, e.target.value)
                }
                /> */}
                

            </div>
        )
        )
    }

    const Stars = ({numberOfStars}) => {
        return Array.from({length: numberOfStars}).map((_, index) => (
            <div key={index}>
                <CiStar className="star" onClick={() => {

                }}/>
            </div>
        ))
    }

    switch(question.type) {
        
        case TYPE.TEXT : {
            content = (
                <div className="question">
                    <p className="title">{question.title}</p>
                    <p className="body">{question.body}</p>
                    
                    <textarea name="" id="" cols="50" rows="10" onChange={e =>
                        saveAnswerInList(question.id, e.target.value)
                        
                    } className="answer-content"/>

                </div>
            );
            break;
        }
        case TYPE.MULTI : {
            content = (
                <div className="question">
                    <p className="title">{question.title}</p>
                    <p className="body">{question.body}</p>
                    <div className="answer-content options">
                    <Options options={question.options} 
                    questionId={question.id} 
                    
                    />
                    </div>
                    
                </div>
            );
            break;
        }
        case TYPE.RANKING : {
            content = (
                <div className="text-rank">
                    rank
                </div>
            );
            break;
        }
        case TYPE.RATING : {
            content = (
                <div className="question">
                    <p className="title">{question.title}</p>
                    <p className="body">{question.body}</p>
                    <div className="answer-content stars">
                        
                        <Stars numberOfStars={question.numberOfStars}/>
                    </div>
                    
                </div>
            );
            break;
        }
        default: {
            
            content = (
                <div>
                    nothing
                </div>
            )
            break;
        }
    }

    return ( 
        <div>
            {content}
            
        </div>
     );
}
 
export default Question;