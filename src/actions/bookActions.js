import {FETCH_BOOK_FIND, FETCH_BOOK_DETAIL} from "./types";
import axios from "axios";

export const fetchBookFind=(page, title)=>dispatch=>{
    axios.get('http://localhost/book/find_react', {
        params:{
            page:page,
            title:title
        }
    }).then(response=>{
        const action={
            type:FETCH_BOOK_FIND,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchBookDetail=(no)=>dispatch=>{
    axios.get('http://localhost/book/detail_react', {
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_BOOK_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}