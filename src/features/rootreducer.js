import { combineReducers } from "redux";
import question from "./question";
import answers from "./answers";

const rootReducer = combineReducers({
    questions: question,
    answers: answers
})

export {rootReducer};