import {combineReducers} from "redux";
import mainReducer from "./mainReducer";
import bookReducer from "./bookReducer";
import boardReducer from "./boardReducer";


export default combineReducers({
    mains:mainReducer,
    books:bookReducer,
    boards:boardReducer
})
