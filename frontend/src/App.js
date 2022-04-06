import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ------------- Pages -----------------------
import HomeLogin from './page/home-login';
import HomeRegi from './page/home-register';
import CompletRegister from './page/completrgister';


import './App.css';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLogin/>} />
          <Route path='/Register' element={<HomeRegi/>} />
          <Route path='/Rcomplet' element={<CompletRegister/>} />
          <Route path='/dashboard' element={<h1>hola mundo</h1>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
