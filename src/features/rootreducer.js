import { combineReducers } from "redux";
import { reducer as questionReducer} from "./question";

const rootReducer = combineReducers({
    question: questionReducer
})

export {rootReducer};