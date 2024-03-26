import {FETCH_BOARD_LIST, FETCH_BOARD_DETAIL, FETCH_BOARD_INSERT, FETCH_BOARD_UPDATE, FETCH_BOARD_UPDATE_OK, FETCH_BOARD_DELETE} from "./types";
import axios from "axios";

export const fetchBoardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get('http://localhost/board/detail_react',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_DETAIL,
            payload: response.data
        }
        dispatch(action)
    })
}

export const fetchBoardInsert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_react', null,{
        params:insertData
    }).then(response=>{
        const action={
            type: FETCH_BOARD_INSERT,
            payload: response.data
        }
        dispatch(action)
    })
}

export const fetchBoardUpdate=(no)=>dispatch=>{
    axios.post('http://localhost/board/update_react', null, {
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type: FETCH_BOARD_UPDATE,
            payload: response.data
        }
        dispatch(action)
    })
}

export const fetchBoardUpdateOk=(updateData)=>dispatch=>{
    axios.post('http://localhost/board/update_ok_react', null, {
        params:updateData
    }).then(response=>{
        const action={
            type:FETCH_BOARD_UPDATE_OK,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchBoardDelete=(no, pwd)=>dispatch=>{
    axios.post('http://localhost/board/delete_React', null, {
        params:{
            no:no,
            pwd:pwd
        }
    }).then(response=>{
        const action={
            type:FETCH_BOARD_DELETE,
            payload:response.data
        }
        dispatch(action)
    })
}
