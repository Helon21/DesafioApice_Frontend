
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CadastroPessoa from './pages/Cadastros/Cadastro-pessoa/CadastroPessoa';
import CadastroCidade from './pages/Cadastros/Cadastro-cidade/CadastroCidade';
import CadastroBairro from './pages/Cadastros/Cadastro-bairro/CadastroBairro';
import CadastroProduto from './pages/Cadastros/Cadastro-produtos/CadastroProduto';
import Venda from './pages/Listagem/Listagem-Venda/ListagemVendas';
import RelatorioPessoa from './pages/Relatorios/Relatorio-Pessoa/RelatorioPessoa';
import RelatorioVenda from './pages/Relatorios/Relatorio-Venda/RelatorioVenda';
import ListaBairros from './pages/Listagem/Listagem-Bairro/ListagemBairros';
import ListaCidades from './pages/Listagem/Listagem-Cidade/ListagemCidade';
import ListaPessoas from './pages/Listagem/Listagem-Pessoa/ListagemPessoas';
import ListaProdutos from './pages/Listagem/Listagem-Produto/ListagemProduto';
import CadastroVenda from './pages/Cadastros/Cadastro-vendas/CadastroVendas';
import AlterarCidade from './pages/Alterar/Alterar-cidade/AlterarCidade';
import AlterarBairro from './pages/Alterar/Alterar-bairro/AlterarBairro';
import AlterarPessoa from './pages/Alterar/Alterar-pessoa/AlterarPessoa';
import AlterarVenda from './pages/Alterar/Alterar-venda/AlterarVenda';
import AlterarProduto from './pages/Alterar/Alterar-produto/AlterarProduto';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={() => <Home/>}/>
        <Route path="/cadastro-pessoa" element={<CadastroPessoa/>}/>
        <Route path="/cadastro-cidade" element={<CadastroCidade/>}/>
        <Route path="/cadastro-bairro" element={<CadastroBairro/>}/>
        <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
        <Route path="/listagem-venda" element={<Venda/>}/>
        <Route path="/relatorio-pessoa" element={<RelatorioPessoa/>}/>
        <Route path="/relatorio-venda" element={<RelatorioVenda/>}/>
        <Route path="/listagem-bairros" element={<ListaBairros/>}/>
        <Route path="/listagem-cidades" element={<ListaCidades/>}/>
        <Route path="/listagem-pessoas" element={<ListaPessoas/>}/> 
        <Route path="/listagem-produtos" element={<ListaProdutos/>}/>
        <Route path="/cadastro-venda" element={<CadastroVenda/>}/>
        <Route path="/editar-cidade/:id" element={<AlterarCidade/>}/>
        <Route path="/editar-bairro/:id" element={<AlterarBairro/>}/>
        <Route path="/editar-pessoa/:id" element={<AlterarPessoa/>}/>
        <Route path="/editar-produto/:id" element={<AlterarProduto/>}/>
        <Route path="/editar-venda/:id" element={<AlterarVenda/>}/>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
