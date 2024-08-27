import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './HomeLayout/Home';
import MainMart from './Mart/MainMart';
import Beverages from './Mart/Beverages.tsx';
import MainPageMart from './Mart/MainPageMart.js';
function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/mart' element={<MainMart/>}/>
     <Route path='/beverage' element={<Beverages/>}/>
     <Route path='/MainPageMart' element={<MainPageMart/>}/>



     </Routes>
    </div>
  );
}
export default App;
