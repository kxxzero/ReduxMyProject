import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <div className="basic-N2" data-bid="NOlU29bpcB">
                <div className="header-inner">
                    <div className="header-container container-lg">
                        <h1 className="header-title">
                            <Link to="/">BookStore</Link>
                        </h1>
                        <div className="header-right">
                            <div className="header-title header-mobile-top">
                                <Link to="/">BookStore</Link>
                            </div>
                            <ul className="header-gnblist">
                                <li className="header-gnbitem">
                                    <Link className="header-gnblink" to="/">
                                        <span>HOME</span>
                                    </Link>
                                </li>
                                <li className="header-gnbitem">
                                    <Link className="header-gnblink" to="../book/find">
                                        <span>BOOK</span>
                                    </Link>
                                </li>
                                <li className="header-gnbitem">
                                    <Link className="header-gnblink" to="../board/list">
                                        <span>COMMUNITY</span>
                                    </Link>
                                </li>
                                <li className="header-gnbitem">
                                    <Link className="header-gnblink" to="#">
                                        <span>CONTACT</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header-utils">
                            <button className="btn-momenu">
                                <img src="/icons/ico_menu_black.svg" alt="모바일메뉴 아이콘"/>
                            </button>
                            <button className="btn-close">
                                <img src="/icons/ico_close_black.svg" alt="닫기 아이콘"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-dim"></div>
            </div>
        </Fragment>
    )
}

export default Header