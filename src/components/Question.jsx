import { useState } from "react";
import { TYPE } from "./AddQuestion";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, updateQuestion, deleteQuestion } from "../features/question";
import { updateAnswer } from "../features/answers";
import {CiStar} from 'react-icons/ci'
import { FaStar } from "react-icons/fa";


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
            </div>
        )
        )
    }

    const Stars = ({numberOfStars, question}) => {
        const [rank, setRank] = useState(Array(numberOfStars).fill(false));

        const updateRating = (newRating) => {
            const newRank = rank.map((value, index) => {
                return index <= newRating ? true : false;
            })
            setRank(newRank);
            saveAnswerInList(question.id, newRating);
            
        }

        return Array.from({length: numberOfStars}).map((_, index) => (
            <div key={index}>
                {rank[index] ? (
            <FaStar className="star" onClick={() => {updateRating(index);
                }} />
        ) : (
            <CiStar className="star" onClick={() => {updateRating(index);
                }} />
        )}
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
                        
                        <Stars numberOfStars={question.numberOfStars} question={question}/>
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