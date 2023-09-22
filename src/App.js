
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CadastroPessoa from './pages/Cadastros/Cadastro-pessoa/CadastroPessoa';
import CadastroCidade from './pages/Cadastros/Cadastro-cidade/CadastroCidade';
import CadastroBairro from './pages/Cadastros/Cadastro-bairro/CadastroBairro';
import CadastroProduto from './pages/Cadastros/Cadastro-produtos/CadastroProduto';
import Venda from './pages/Movimento/Vendas';
import RelatorioPessoa from './pages/Relatorios/Relatorio-Pessoa/RelatorioPessoa';
import RelatorioVenda from './pages/Relatorios/Relatorio-Venda/RelatorioVenda';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={() => <Home/>}/>
        <Route path="/cadastro-pessoa" element={<CadastroPessoa/>}/>
        <Route path="/cadastro-cidade" element={<CadastroCidade/>}/>
        <Route path="/cadastro-bairro" element={<CadastroBairro/>}/>
        <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
        <Route path="/movimento-venda" element={<Venda/>}/>
        <Route path="/relatorio-pessoa" element={<RelatorioPessoa/>}/>
        <Route path="/relatorio-venda" element={<RelatorioVenda/>}/>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
