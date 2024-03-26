import {FETCH_BOARD_LIST, FETCH_BOARD_DETAIL, FETCH_BOARD_INSERT, FETCH_BOARD_UPDATE, FETCH_BOARD_UPDATE_OK, FETCH_BOARD_DELETE} from "../actions/types";

const boardState={
    board_list:{},
    result:'',
    update_data:{}
}

export default function(state=boardState, action){
    switch (action.type) {
        case FETCH_BOARD_LIST:
            return {
                ...state,
                board_list: action.payload
            }
        case FETCH_BOARD_DETAIL:
            return {
                ...state,
                board_detail: action.payload
            }
        case FETCH_BOARD_INSERT:
            return {
                ...state,
                result: action.payload
            }
        case FETCH_BOARD_UPDATE:
            return {
                ...state,
                update_data: action.payload
            }
        case FETCH_BOARD_UPDATE_OK:
            return {
                ...state,
                result: action.payload
            }
        case FETCH_BOARD_DELETE:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}