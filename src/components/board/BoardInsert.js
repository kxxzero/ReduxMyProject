import {Fragment, useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {fetchBoardInsert} from "../../actions/boardActions";

export const BoardInsert=()=>{
    const nav=useNavigate()
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')

    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)

    const insert=()=>{
        if(name.trim()==='') {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==='') {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==='') {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==='') {
            pwdRef.current.focus()
            return
        }

        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }

        dispatch(fetchBoardInsert(params))
    }

    const result=useSelector((state)=>state.boards.result)
    if(result&& result==='yes') {
        window.location.href='/board/list'
    }
    else if(result && result==='no') {
        alert('게시판 추가에 실패하셨습니다')
    }

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

    return (
        <Fragment>
            <div className="basic-N24" data-bid="KElte73kTV">
                <div className="contents-inner">
                    <div className="contents-container container-md">
                        <div className="form-group">
                            <div className="textset">
                                <h2 className="textset-tit">작성하기</h2>
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
                                    <textarea className="inputset-textarea textarea-keyup form-control" placeholder="내용을 입력해 주세요." required="" value={content} ref={contentRef} onChange={contentChange}></textarea>
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
                                <button className="btnset" type="button" onClick={insert}>작성하기</button>
                                <button className="btnset" type="button" onClick={()=>nav(-1)}>취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}