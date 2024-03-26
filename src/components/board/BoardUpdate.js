import {Fragment, useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {fetchBoardUpdate, fetchBoardUpdateOk} from "../../actions/boardActions";

export const BoardUpdate=()=>{
    const {no}=useParams()
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    // 태그 제어 => focus, 비활성, 활성화 => useRef
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoardUpdate(no))
    },[no])

    const updateDate=useSelector((state)=>state.boards.update_data)

    useEffect(()=>{
        setName(updateDate.name)
        setContent(updateDate.content)
        setSubject(updateDate.subject)
    },[updateDate])

    useEffect(() => {
        dispatch(fetchBoardUpdateOk({
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }))
    }, [pwd]);

    const up_result=useSelector((state)=>state.boards.result)

    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const update=()=> {
        if (name.trim() === "") {
            nameRef.current.focus()
            return
        }
        if (subject.trim() === "") {
            subjectRef.current.focus()
            return
        }
        if (content.trim() === "") {
            contentRef.current.focus()
            return
        }
        if (pwd.trim() === "") {
            pwdRef.current.focus()
            return
        }

        if (up_result === "yes") {
            window.location.href = "/board/detail/" + no
        } else if (up_result === "no") {
            alert("비밀번호가 틀립니다.")
            pwdRef.current.value = ''
            pwdRef.current.focus()
        }
    }

    return (
        <Fragment>
            <div className="basic-N24" data-bid="KElte73kTV">
                <div className="contents-inner">
                    <div className="contents-container container-md">
                        <div className="form-group">
                            <div className="textset">
                                <h2 className="textset-tit">수정하기</h2>
                            </div>
                            <div className="inputset inputset-lg inputset-label">
                                <label>
                                    <h6 className="inputset-tit">이름</h6>
                                    <input type="text" className="inputset-input form-control" placeholder="이름을 입력해 주세요." required="" value={name} ref={nameRef} onChange={nameChange}/>
                                </label>
                            </div>
                            <div className="inputset inputset-lg inputset-label">
                                <label>
                                    <h6 className="inputset-tit">제목</h6>
                                    <input type="text" className="inputset-input form-control" placeholder="제목을 입력해 주세요." required="" value={subject} ref={subjectRef} onChange={subjectChange}/>
                                </label>
                            </div>
                            <div className="inputset inputset-lg inputset-label">
                                <label>
                                    <h6 className="inputset-tit">내용</h6>
                                    <textarea className="inputset-textarea textarea-keyup form-control" placeholder="내용을 입력해 주세요." required="" value={content} ref={contentRef} onChange={contentChange}>{content}</textarea>
                                    <div className="inputset-langth">
                                        <span className="inputset-count">0</span>
                                        <span className="inputset-total">/4000</span>
                                    </div>
                                </label>
                            </div>
                            <div className="inputset inputset-lg inputset-label">
                                <label>
                                    <h6 className="inputset-tit">비밀번호</h6>
                                    <input type="password" className="inputset-input form-control" placeholder="비밀번호를 입력해 주세요." required="" value={pwd} ref={pwdRef} onChange={pwdChange}/>
                                </label>
                            </div>
                            <div className="form-btn">
                                <button className="btnset" type="button" onClick={update}>수정하기</button>
                                <button className="btnset" type="button" onClick={()=>nav(-1)}>취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}