import {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBookMain, fetchBoardMain} from "../../actions/mainActions";

function Home(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBookMain())
        dispatch(fetchBoardMain())
    }, [])

    const bookMain=useSelector((state)=>state.mains.book_main)
    const boardMain=useSelector((state)=>state.mains.board_main)

    const bookHtml=bookMain.map((book) =>
        <div key={book.no} className="swiper-slide">
            <Link to={"/book/detail/"+book.no} className="cardset cardset-shopping">
                <figure className="cardset-figure">
                    <img className="cardset-img" src={book.poster} title={book.title}/>
                </figure>
                <div className="cardset-body">
                    <span className="cardset-name">{book.genre}</span>
                    <h2 className="cardset-tit">{book.title} </h2>
                    <p className="cardset-desc">{book.price}<small>원</small></p>
                </div>
            </Link>
        </div>
    )

    const boardHtml=boardMain.map((board) =>
        <Link to={"/board/detail/"+board.no} key={board.no} className="cardset cardset-inner cardset-hover cardset-border">
            <div className="cardset-cont">
                <h2 className="cardset-tit">{board.subject}</h2>
                <p className="cardset-desc">{board.content}</p>
                <div className="cardset-bottom">
                    <p className="title">{board.name}</p>
                    <span className="cardset-txt">{board.regdate}</span>
                </div>

            </div>
        </Link>
    )

    return (
        <Fragment>
            <main className="th-layout-main ">
                <div className="basic-N5" data-bid="BIlSB2dDjn">
                    <div className="contents-container">
                        <div className="contents-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img className="contents-backimg img-pc" src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="PC 배너 이미지"/>
                                    <img className="contents-backimg img-mobile" src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="모바일 배너 이미지"/>
                                    <div className="contents-slide-group container-md">
                                        <div className="textset textset-visual">
                                            <h2 className="textset-tit">온라인 도서 플랫폼<br/> BookStore</h2>
                                            <p className="textset-desc">24시간 온라인 서점을 통해 빠르고 간편하게 독서 라이프를 즐기세요!</p>
                                        </div>
                                        {/*<a className="btnset btnset-round" href="">자세히보기</a>*/}
                                    </div>
                                </div>
                            </div>
                            {/*<div className="contents-control">*/}
                            {/*    <div className="swiper-button-prev"></div>*/}
                            {/*    <div className="swiper-pagination"></div>*/}
                            {/*    <div className="swiper-button-next"></div>*/}
                            {/*    <div className="swiper-button-pause">*/}
                            {/*        <img src="/icons/ico_pause_white.svg" alt="스와이퍼 멈춤버튼"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="swiper-button-play">*/}
                            {/*        <img src="/icons/ico_play_white.svg" alt="스와이퍼 재생버튼"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <div className="basic-N42" data-bid="oQlTy4V6s7">
                    <div className="contents-inner">
                        <div className="contents-container container-md">
                            <div className="textset">
                                <h2 className="textset-tit">Best Product</h2>
                                <p className="textset-desc">베스트 상품을 지금 바로 만나보세요!</p>
                            </div>
                            <div className="swiper contents-swiper">
                                <div className="swiper-wrapper">
                                    {bookHtml}
                                </div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <div className="basic-N9" data-bid="cClsB2dE94">
                    <div className="contents-inner">
                        {/*<div className="contents-container container-md">*/}
                        {/*    <div className="textset">*/}
                        {/*        <h2 className="textset-tit">템하 비즈니스</h2>*/}
                        {/*        <p className="textset-desc">웹사이트는 비즈니스의 온라인 존재감을 나타내는 중요한 수단이며, 비즈니스가 웹사이트를<br/>보유하면 전 세계 어디에서든 제품과 서비스에 대한 정보를 제공할 수 있습니다.</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="contents-control">*/}
                        {/*        <div className="swiper-button-prev"></div>*/}
                        {/*        <div className="swiper-button-next"></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="swiper contents-swiper">*/}
                        {/*        <div className="swiper-wrapper">*/}
                        {/*            <div className="swiper-slide">*/}
                        {/*                <div className="cardset cardset-inner">*/}
                        {/*                    <figure className="cardset-figure">*/}
                        {/*                        <img className="cardset-img" src="/images/img_basic_N9_1.png" alt="스와이퍼 이미지"/>*/}
                        {/*                    </figure>*/}
                        {/*                    <div className="cardset-body">*/}
                        {/*                        <h2 className="cardset-tit">템하 비즈니스</h2>*/}
                        {/*                        <p className="cardset-desc">비즈니스의 온라인 존재감을 나타내는 중요한 수단이며, 비즈니스가<br/>웹사이트를 보유하면 전 세계 어디에서든 제품과 서비스에 대한 정보를 제공</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="contents-container">
                            <div className="contents-bottom container-md">
                                <div className="textset">
                                    <h2 className="textset-tit">Community</h2>
                                    <p className="textset-desc">도서 커뮤니티를 자유롭게 이용해 보세요!</p>
                                </div>
                                <div className="contents-cardset">
                                    {boardHtml}
                                </div>
                                <div className="contents-btn">
                                    <a href="/board/list" className="btnset btnset-icon icon-left icon-more">더보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Home