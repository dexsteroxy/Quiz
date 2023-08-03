
import './App.css';
import {Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
    
 
  <Routes>
 
  <Route path='/' element={<Home/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/quiz' element={<Quiz/>}></Route>


  </Routes>
    </div>
  );
}

export default App;
