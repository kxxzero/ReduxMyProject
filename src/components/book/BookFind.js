import {Fragment, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {fetchBookFind} from "../../actions/bookActions";

export const BookFind=()=>{
    const [curpage, setCurpage]=useState(1)
    const [title, setTitle]=useState("")
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBookFind(curpage, title))
    }, [curpage, title])

    const bookFind=useSelector((state)=>state.books.book_find.book_find)
    const totalpage=useSelector((state)=>state.books.book_find.totalpage)
    const findChange=(e)=>{
        setTitle(e.target.value)
    }
    const pageChange=(page)=>{
        setCurpage(page)
    }

    return (
        <Fragment>
            <div className="basic-N50" data-bid="dvlTHW3fVz">
                <div className="contents-inner">
                    <div className="contents-container container-md">
                        <div className="textset">
                            <h2 className="textset-tit">도서 목록</h2>
                            <button className="contents-btn btn-filter" type="button">
                                <img src="/icons/ico_filter_black.svg" alt="모바일 필터 아이콘"/>
                            </button>
                        </div>
                        <div className="contents-body">
                            <div className="contents-left">
                                <div className="contents-filter-header">
                                    <strong>필터</strong>
                                    <button className="contents-btn btn-close">
                                        <img src="/icons/ico_close_black.svg" alt="닫기 아이콘"/>
                                    </button>
                                </div>
                                <div className="contents-filter-body">
                                    <div className="accordset accordset-plus">
                                        <div className="accordset-item">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">전체</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="checkset">*/}
                                            {/*            <input id="checkset-1-1" className="checkset-input input-round" type="checkbox" value="" defaultChecked=""/>*/}
                                            {/*            <label className="checkset-label" htmlFor="checkset-1-1"></label>*/}
                                            {/*            <span className="checkset-text">전체</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="accordset-item">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">실시간 베스트</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="radioset">*/}
                                            {/*            <input id="radioset-2-1" name="radioset-2" className="radioset-input input-line" type="radio" value=""/>*/}
                                            {/*            <label className="radioset-label" htmlFor="radioset-2-1"></label>*/}
                                            {/*            <span className="radioset-text">실시간 베스트</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="accordset-item">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">특가 베스트</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="checkset">*/}
                                            {/*            <input id="checkset-3-1" className="checkset-input input-round" type="checkbox" value="" defaultChecked=""/>*/}
                                            {/*            <label className="checkset-label" htmlFor="checkset-3-1"></label>*/}
                                            {/*            <span className="checkset-text">특가 베스트</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="accordset-item">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">일별 베스트</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="checkset">*/}
                                            {/*            <input id="checkset-4-1" className="checkset-input input-round" type="checkbox" value="" defaultChecked=""/>*/}
                                            {/*            <label className="checkset-label" htmlFor="checkset-4-1"></label>*/}
                                            {/*            <span className="checkset-text">일별 베스트</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="accordset-item">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">월별/주별 베스트</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="checkset">*/}
                                            {/*            <input id="checkset-5-1" className="checkset-input input-round" type="checkbox" value="" defaultChecked=""/>*/}
                                            {/*            <label className="checkset-label" htmlFor="checkset-5-1"></label>*/}
                                            {/*            <span className="checkset-text">월별/주별 베스트</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="accordset-item active">
                                            <div className="accordset-header">
                                                <button className="accordset-button btn" type="button">스테디 셀러</button>
                                            </div>
                                            {/*<div className="accordset-body">*/}
                                            {/*    <div className="accordset-content">*/}
                                            {/*        <div className="checkset">*/}
                                            {/*            <input id="checkset-6-1" className="checkset-input input-round" type="checkbox" value="" defaultChecked=""/>*/}
                                            {/*            <label className="checkset-label" htmlFor="checkset-6-1"></label>*/}
                                            {/*            <span className="checkset-text">스테디 셀러</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="contents-filter-footer">*/}
                                {/*    <span>필터초기화</span>*/}
                                {/*    <button className="contents-btn btn-refresh">*/}
                                {/*        <img src="/icons/ico_refresh_black.svg" alt="닫기 아이콘"/>*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                            <div className="contents-right">
                                <div className="contents-sort">
                                    {/*<p className="contents-sort-total">*/}
                                    {/*    총 <span>1010</span>개의 제품이 있습니다.*/}
                                    {/*</p>*/}
                                    <div className="inputset inputset-border-bottom">
                                        <button className="inputset-icon icon-right icon-search btn" type="button" aria-label="아이콘"></button>
                                        <input type="text" className="inputset-input form-control" placeholder="검색어를 입력하세요" onChange={findChange} value={title}/>
                                    </div>
                                    <div className="contents-sort-sel">
                                        <div className="tabset tabset-text">
                                            <ul className="tabset-list">
                                                <li className="tabset-item">
                                                    <a className="tabset-link active">
                                                        <span>신상품순</span>
                                                    </a>
                                                </li>
                                                <li className="tabset-item">
                                                    <a className="tabset-link">
                                                        <span>인기순</span>
                                                    </a>
                                                </li>
                                                <li className="tabset-item">
                                                    <a className="tabset-link">
                                                        <span>최저가순</span>
                                                    </a>
                                                </li>
                                                <li className="tabset-item">
                                                    <a className="tabset-link">
                                                        <span>최고가순</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="selectset selectset-round selectset-sm">
                                            <button className="selectset-toggle btn" type="button">
                                                <span>12개씩 보기</span>
                                            </button>
                                            <ul className="selectset-list">
                                                <li className="selectset-item">
                                                    <button className="selectset-link btn" type="button" data-value="전체">
                                                        <span>전체</span>
                                                    </button>
                                                </li>
                                                <li className="selectset-item">
                                                    <button className="selectset-link btn" type="button" data-value="12개씩 보기">
                                                        <span>12개씩 보기</span>
                                                    </button>
                                                </li>
                                                <li className="selectset-item">
                                                    <button className="selectset-link btn" type="button" data-value="30개씩 보기">
                                                        <span>30개씩 보기</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="contents-list">
                                    {bookFind &&
                                        bookFind.map((vo) =>
                                            <Link to={"/book/detail/" + vo.no} className="cardset cardset-shopping">
                                                <figure className="cardset-figure">
                                                    <img className="cardset-img" src={vo.poster} alt="{vo.title}"/>
                                                </figure>
                                                <div className="cardset-body">
                                                    <span className="cardset-name">{vo.genre}</span>
                                                    <h2 className="cardset-tit">{vo.title}</h2>
                                                    <p className="cardset-desc">{vo.price}<small>원</small></p>
                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                                {/*<nav className="pagiset pagiset-line">*/}
                                {/*    <div className="pagiset-ctrl">*/}
                                {/*        <a className="pagiset-link pagiset-first" href="">*/}
                                {/*            <span className="visually-hidden">처음</span>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <div className="pagiset-ctrl">*/}
                                {/*        <a className="pagiset-link pagiset-prev" href="">*/}
                                {/*            <span className="visually-hidden">이전</span>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <div className="pagiset-list">*/}
                                {/*        <a className="pagiset-link active-fill" href="">1</a>*/}
                                {/*        <a className="pagiset-link" href="">2</a>*/}
                                {/*    </div>*/}
                                {/*    <div className="pagiset-ctrl">*/}
                                {/*        <a className="pagiset-link pagiset-next" href="">*/}
                                {/*            <span className="visually-hidden">다음</span>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <div className="pagiset-ctrl">*/}
                                {/*        <a className="pagiset-link pagiset-last" href="">*/}
                                {/*            <span className="visually-hidden">마지막</span>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*</nav>*/}
                                <Pagination
                                    activePage={curpage}
                                    itemsCountPerPage={12}
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
                </div>
                <div className="contents-dim"></div>
            </div>
        </Fragment>
    )
}