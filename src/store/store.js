import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";

const logger=createLogger()
const middleware=[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
export default store