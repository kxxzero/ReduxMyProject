import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import store from "./store/store";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import {BookFind} from "./components/book/BookFind";
import {BookDetail} from "./components/book/BookDetail";
import {BoardList} from "./components/board/BoardList";
import {BoardDetail} from "./components/board/BoardDetail";
import {BoardInsert} from "./components/board/BoardInsert";
import {BoardUpdate} from "./components/board/BoardUpdate";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Header/>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/book/find"} element={<BookFind/>}/>
                <Route path={"/book/detail/:no"} element={<BookDetail/>}/>
                <Route path={"/board/list"} element={<BoardList/>}/>
                <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                <Route path={"/board/insert"} element={<BoardInsert/>}/>
                <Route path={"/board/update"} element={<BoardUpdate/>}/>
            </Routes>
          <Footer/>
        </Router>
      </Provider>
  )
}

export default App;
