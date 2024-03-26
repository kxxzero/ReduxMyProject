import {FETCH_BOOK_MAIN, FETCH_BOARD_MAIN} from "../actions/types";

const mainState={
    book_main:[],
    board_main:[]
}

export default function(state=mainState,action){
    switch (action.type) {
        case FETCH_BOOK_MAIN:
            return {
                ...state,
                book_main: action.payload
            }
        case FETCH_BOARD_MAIN:
            return {
                ...state,
                board_main: action.payload
            }
        default:
            return state
    }
}