import Home from './pages/home/home';
import Login from './pages/logIn/logIn';
import PostPage from './pages/postPage/postPage';
import SignUp from './pages/signUp/signUp';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/article" element={<PostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

    );
}

export default App;
