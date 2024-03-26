import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList} from "../../actions/boardActions";
import Pagination from "react-js-pagination";

export const BoardList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoardList(curpage))
    },[curpage])

    const boardList=useSelector((state)=>state.boards.board_list.board_list)
    const totalpage=useSelector((state)=>state.boards.board_list.totalpage)

    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <Fragment>
            <div className="basic-N53" data-bid="wZLTe88Q8h">
                <div className="contents-inner">
                    <div className="contents-container container-md">
                        <div className="textset">
                            <h2 className="textset-tit">커뮤니티</h2>
                            <Link to={"/board/insert"} className="btnset newInsertBtn">새글</Link>
                        </div>
                        <div className="accordset accordset-qna accordset-plus">
                            {
                                boardList &&
                                boardList.map((vo) =>
                                    <div className="accordset-item">
                                        <div className="accordset-header">
                                            <button className="accordset-button btn" type="button">
                                                <span className="accordset-q">{vo.no}</span>
                                                <Link to={"/board/detail/" + vo.no}
                                                      className="title">{vo.subject}</Link>
                                                <span className="date">{vo.regdate}</span>
                                            </button>
                                        </div>
                                        <div className="accordset-body">
                                            <div className="accordset-content">
                                                <span className="accordset-a"></span>{vo.content}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {/*<nav className="pagiset pagiset-line">*/}
                        {/*    <div className="pagiset-ctrl">*/}
                        {/*        <a className="pagiset-link pagiset-first" href="#">*/}
                        {/*            <span className="visually-hidden">처음</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div className="pagiset-ctrl">*/}
                        {/*        <a className="pagiset-link pagiset-prev" href="#">*/}
                        {/*            <span className="visually-hidden">이전</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div className="pagiset-list">*/}
                        {/*        <a className="pagiset-link active-fill" href="#">1</a>*/}
                        {/*        <a className="pagiset-link" href="#">2</a>*/}
                        {/*    </div>*/}
                        {/*    <div className="pagiset-ctrl">*/}
                        {/*        <a className="pagiset-link pagiset-next" href="#">*/}
                        {/*            <span className="visually-hidden">다음</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div className="pagiset-ctrl">*/}
                        {/*        <a className="pagiset-link pagiset-last" href="#">*/}
                        {/*            <span className="visually-hidden">마지막</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</nav>*/}
                        <Pagination
                            activePage={curpage}
                            itemsCountPerPage={10}
                            totalItemsCount={totalpage}
                            pageRangeDisplayed={10}
                            prevPageText={"<"}
                            nextPageText={">"}
                            onChange={pageChange}
                            style={{"width": "100%"}}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BoardList