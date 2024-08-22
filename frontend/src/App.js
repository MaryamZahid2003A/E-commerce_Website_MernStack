import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './HomeLayout/Home';
function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}
export default App;
