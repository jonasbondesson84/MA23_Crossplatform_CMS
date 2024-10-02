const Question = ({question}) => {
    return ( 
        <div>
            question: {question.title}
            id: {question.id}
        </div>
     );
}
 
export default Question;