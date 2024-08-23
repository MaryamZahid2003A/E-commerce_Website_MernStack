import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './HomeLayout/Home';
import MainMart from './Mart/MainMart';
function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/mart' element={<MainMart/>}/>

     </Routes>
    </div>
  );
}
export default App;
