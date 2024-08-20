import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import { Routes,Route } from 'react-router-dom';
import Home from './HomeLayout/Home';
function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </div>
  );
}
export default App;
