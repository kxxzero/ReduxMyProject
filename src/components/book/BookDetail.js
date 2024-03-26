import {Fragment, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {fetchBookDetail} from "../../actions/bookActions";

export const BookDetail=()=>{
    const {no}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBookDetail(no))
    },[no])

    const bookDetail=useSelector((state)=>state.books.book_detail)

    return (
        bookDetail &&
        <>
            <div className="basic-N51" data-bid="JRlthW42Pc">
                <div className="contents-inner">
                    <div className="contents-container container-md">
                        <div className="contents-left">
                            <div className="contents-thumbnail">
                                <img className="contents-thumbimg" src={bookDetail.poster} title={bookDetail.title}/>
                            </div>
                        </div>
                        <div className="contents-right">
                            <div className="contents-right-group">
                                <div className="contents-brand">
                                    <span>{bookDetail.genre}</span>
                                    <div className="contents-brand-group">
                                        <button className="contents-btn btn-like-line">
                                            <img src="/icons/ico_like_black_line.svg" alt="하트 라인 아이콘"/>
                                        </button>
                                        <button className="contents-btn btn-like-fill">
                                            <img src="/icons/ico_like_black_fill.svg" alt="하트 채워진 아이콘"/>
                                        </button>
                                        <button className="contents-btn">
                                            <img src="/icons/ico_share_black.svg" alt="공유 아이콘"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="textset">
                                    <h2 className="textset-tit">{bookDetail.title}</h2>
                                    <p className="textset-desc">{bookDetail.keyword}</p>
                                </div>
                                {/*<div className="contents-badge-group">*/}
                                {/*    <div className="badgeset badgeset-tag badgeset-round badgeset-line">*/}
                                {/*        <span className="badgeset-text">#피부민감</span>*/}
                                {/*    </div>*/}
                                {/*    <div className="badgeset badgeset-tag badgeset-round badgeset-line">*/}
                                {/*        <span className="badgeset-text">#트러블</span>*/}
                                {/*    </div>*/}
                                {/*    <div className="badgeset badgeset-tag badgeset-round badgeset-line">*/}
                                {/*        <span className="badgeset-text">#진정</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <p className="contents-price">{bookDetail.price} <span>원</span></p>
                            </div>
                            <div className="contents-right-group">
                                <ul className="contents-right-list">
                                    <li className="contents-right-item">
                                        <strong>저자</strong>
                                        <span>{bookDetail.author}</span>
                                    </li>
                                    <li className="contents-right-item">
                                        <strong>출판사</strong>
                                        <span>{bookDetail.publ}</span>
                                    </li>
                                    <li className="contents-right-item">
                                        <strong>포인트 적립</strong>
                                        <span>로그인 시 포인트 적립 가능</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="contents-right-group">
                                <ul className="contents-right-list">
                                    <li className="contents-right-item">
                                        <strong>수량</strong>
                                        <div className="contents-amount">
                                            <button className="contents-btn btn-minus" type="button">
                                                <img src="/icons/ico_minus_black.svg" alt="마이너스 아이콘"/>
                                            </button>
                                            <p className="contents-amount-num">1</p>
                                            <button className="contents-btn btn-plus" type="button">
                                                <img src="/icons/ico_plus_black.svg" alt="플러스 아이콘"/>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contents-total">
                                    <strong>총 결제 금액</strong>
                                    <p className="contents-price">{bookDetail.price} <span>원</span>
                                    </p>
                                </div>
                            </div>
                            <div className="contents-btn-group">
                                <button className="btnset btnset-line" type="button">장바구니</button>
                                <button className="btnset" type="button">구매하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basic-N52" data-bid="UWlThW42z2">
                <div className="contents-inner">
                    <div className="tabset tabset-fluid">
                        <ul className="tabset-list container-md">
                            <li className="tabset-item">
                                <a className="tabset-link active" href="">
                                    <span>상세정보</span>
                                </a>
                            </li>
                            <li className="tabset-item">
                                <a className="tabset-link" href="">
                                    <span>상품문의</span>
                                </a>
                            </li>
                            <li className="tabset-item">
                                <a className="tabset-link" href="">
                                    <span>리뷰</span>
                                </a>
                            </li>
                            <li className="tabset-item">
                                <a className="tabset-link" href="">
                                    <span>배송/교환/반품안내</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contents-container container-md">
                        <div className="imageset">
                            {bookDetail.content !="이미지 정보가 없습니다." ? (
                                <img className="imageset-img" src={bookDetail.content} />
                            ) : (
                                <p>상세 정보 없음</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

