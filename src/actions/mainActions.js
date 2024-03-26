import {FETCH_BOOK_MAIN, FETCH_BOARD_MAIN} from "./types";
import axios from "axios";

export const fetchBookMain=()=>dispatch=>{
    axios.get('http://localhost/book/main').then(response=>{
        const action={
            type:FETCH_BOOK_MAIN,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchBoardMain=()=>dispatch=>{
    axios.get('http://localhost/board/main').then(response=>{
        const action={
            type:FETCH_BOARD_MAIN,
            payload:response.data
        }
        dispatch(action)
    })
}