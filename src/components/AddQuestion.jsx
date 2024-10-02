import { useState } from "react";
import TextQuestion from "./TextQuestion";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import RankingQuestion from "./RankingQuestion";
import RatingQuestion from "./RatingQuestion";

const AddQuestion = () => {
    const [type, setType] = useState("0");

    const questionType =() => {switch(type) {
        case '1': {
            return <TextQuestion />
        }
        case '2': {
            return <MultiChoiceQuestion />
        } 
        case '3': {
            return <RankingQuestion />
        }
        case '4': {
            return <RatingQuestion />
        }
        default: {
            // console.log({type})
            return (<div>Nothing</div>)
        }
    }}


    return ( 
        <div>
            <p>Add question</p>
            <input type="radio" name="Question type" id="1" value="" onChange={e => setType(e.target.id)}/>Text Question
            <input type="radio" name="Question type" id="2" value="" onChange={e => setType(e.target.id)}/>Multi Choice Question
            <input type="radio" name="Question type" id="3" value="{type}" onChange={e => setType(e.target.id)}/>Ranking
            <input type="radio" name="Question type" id="4" value="{type}" onChange={e => setType(e.target.id)}/>Rating
            
            {questionType()}
            <div>{type}</div>
        </div>
     );
}
 
export default AddQuestion;