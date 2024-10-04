import { useState } from "react";
import TextQuestion from "./TextQuestion";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import RankingQuestion from "./RankingQuestion";
import RatingQuestion from "./RatingQuestion";


export const TYPE = {
    TEXT: "text",
    MULTI: "multi",
    RANKING: "rank",
    RATING: "rating"
    
}

const AddQuestion = () => {

    const [type, setType] = useState(0);
    const [hideType, setHideType] = useState(false);

    const questionType =() => {switch(type) {
        case 1: {
            return <TextQuestion setHideType={setHideType} setType={setType}/>
        }
        case 2: {
            return <MultiChoiceQuestion setHideType={setHideType} setType={setType} />
        } 
        case 3: {
            return <RankingQuestion setHideType={setHideType} setType={setType} />
        }
        case 4: {
            return <RatingQuestion setHideType={setHideType} setType={setType} />
        }
        default: {
            return (<div></div>)
        }
    }}

    const handleClick = (type) => {
        setType(type);
        setHideType(true);
    }


    return ( 
        <div className="add-question">
            <p>Add question</p>
            <div className={`select-type ${hideType ? 'hide' : ''}`}>
                <button onClick={() => handleClick(1)} className="button">Text question</button>
                <button onClick={() => handleClick(2)} className="button">Multi choice question</button>
                <button onClick={() => handleClick(3)} className="button">Ranking</button>
                <button onClick={() => handleClick(4)} className="button">Rating</button>
            </div>
            
            
            {questionType()}
            
        </div>
     );
}
 
export default AddQuestion;