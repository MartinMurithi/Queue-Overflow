import './App.css';

import { Routes, Route } from 'react-router-dom'

import Main from './Components/Main/Main';
import Nav from './Components/NavBar/Nav';
import QuizInput from './Components/QuizInput/QuizInput';
import Footer from './Components/Footer/Footer'
import Login from './Components/Logins/Login';
import Signin from './Components/Logins/Signin';
import Quiz from './Components/Questions/Quiz';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Account from './Components/Account/Account';
import About from './Components/about/About';

function App() {

  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='signin' element={<Signin />} />
        <Route path='topquestions' element={<Quiz />} />
        <Route path='quizinput' element={<QuizInput/>} />
        <Route path='topquestions/:questionId' element={<QuizDetails/>} />
        <Route path='account' element={<Account/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    <Footer/>

    </div>
  );
}

export default App;
