import {FETCH_BOOK_FIND, FETCH_BOOK_DETAIL} from "../actions/types";

const bookState={
    book_find:{},
    book_detail:{}
}

export default function (state=bookState, action){
    switch(action.type) {
        case FETCH_BOOK_FIND:
            return {
                ...state,
                book_find: action.payload
            }
        case FETCH_BOOK_DETAIL:
            return {
                ...state,
                book_detail: action.payload
            }
        default:
            return state
    }
}