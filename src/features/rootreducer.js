import { combineReducers } from "redux";
import { reducer as questionReducer} from "./question";

const rootReducer = combineReducers({
    questions: questionReducer
})

export {rootReducer};