
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CadastroPessoa from './pages/Cadastros/Cadastro-pessoa/CadastroPessoa';
import CadastroCidade from './pages/Cadastros/Cadastro-cidade/CadastroCidade';
import CadastroBairro from './pages/Cadastros/Cadastro-bairro/CadastroBairro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={() => <Home/>}/>
        <Route path="/cadastro-pessoa" element={<CadastroPessoa/>}/>
        <Route path="/cadastro-cidade" element={<CadastroCidade/>}/>
        <Route path="/cadastro-bairro" element={<CadastroBairro/>}/>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
