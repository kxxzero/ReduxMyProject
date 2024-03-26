import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchBoardDetail} from "../../actions/boardActions";

export const BoardDetail=()=>{
    const {no}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoardDetail(no))
    },[no])

    const boardDetail=useSelector((state)=>state.boards.board_detail)

    return (
        boardDetail &&
        <>
            <div className="opilsol-N25" data-bid="jrLte86yYJ">
                <div className="content-container">
                    <div className="container-md">
                        <div className="contant-header textset">
                            <h2 className="textset-tit h2">{boardDetail.subject}</h2>
                        </div>
                        <div className="contant-body">
                            <p>
                                {boardDetail.content}
                            </p>
                        </div>
                        <div className="content-info">
                            <p className="textset-desc p1">{boardDetail.name}</p>
                            <span>{boardDetail.regdate}</span>
                        </div>
                        {/*<div className="contant-bottom">*/}
                        {/*    <div className="contant-nav">*/}
                        {/*        <button className="con-link-btn prve" type="button">NEXT</button>*/}
                        {/*        <a className="con-link" href="">고객불만제로를 위한 교육을 실시하였습니다.</a>*/}
                        {/*        <span className="date">2023.01.01</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="contant-nav">*/}
                        {/*        <button className="con-link-btn next" type="button">PREV</button>*/}
                        {/*        <a className="con-link" href="">좋은 솔루션 만들기 위원회 워크숍</a>*/}
                        {/*        <span className="date">2023.01.01</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="bottom-btn">
                            <Link to={"/board/update/"+boardDetail.no} className="btnset btnset-lg btnset-rect">수정하기</Link>
                            <Link to={"/board/list/"} className="btnset btnset-lg btnset-rect">목록보기</Link>
                            <Link to={"/board/delete/"} className="btnset btnset-lg btnset-rect">삭제하기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}