import {Fragment} from "react";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <Fragment>
            <footer className="basic-N4" data-bid="SxLsb2DEgi">
                <div className="footer-container container-lg">
                    <div className="footer-top">
                        <h1 className="footer-logo">
                            <Link to="/">BookStore</Link>
                        </h1>
                        <ul className="footer-menulist">
                            <li className="footer-menuitem">
                                <Link to="#">
                                    <span>이용약관</span>
                                </Link>
                            </li>
                            <li className="footer-menuitem">
                                <Link to="#">
                                    <span>개인정보처리방침</span>
                                </Link>
                            </li>
                            <li className="footer-menuitem">
                                <Link to="../book/find">
                                    <span>BOOK</span>
                                </Link>
                            </li>
                            <li className="footer-menuitem">
                                <Link to="../board/list">
                                    <span>COMMUNITY</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="footer-snslist">
                            <li className="footer-snsitem">
                                <a className="footer-snslink" href="">
                                    <img src="/icons/ico_instagram_lightgrey.svg" alt="인스타그램"/>
                                </a>
                            </li>
                            <li className="footer-snsitem">
                                <a className="footer-snslink" href="">
                                    <img src="/icons/ico_youtube_lightgrey.svg" alt="유튜브"/>
                                </a>
                            </li>
                            <li className="footer-snsitem">
                                <a className="footer-snslink" href="">
                                    <img src="/icons/ico_facebook_lightgrey.svg" alt="페이스북"/>
                                </a>
                            </li>
                            <li className="footer-snsitem">
                                <a className="footer-snslink" href="">
                                    <img src="/icons/ico_kakao_lightgrey.svg" alt="카카오톡"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-txt">
                            <p>
                                서울특별시 마포구 월드컵북로 21
                            </p>
                            <p>
                                <span>T. 010-1234-5678</span>
                                <span>E. younge_0202@naver.com</span>
                            </p>
                        </div>
                        <div className="footer-txt">
                            <p>2024 BY KIMHAYOUNG. ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer