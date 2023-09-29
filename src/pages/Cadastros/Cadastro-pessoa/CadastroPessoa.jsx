// CadastroForm.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Autocomplete } from '@mui/material';
import style from './CadastroPessoa.module.css'
import { Link } from "react-router-dom";
import PessoaService from '../../../services/PessoaService';
import BairroService from '../../../services/BairroService';
import CidadeService from '../../../services/CidadeService';



const CadastroPessoa = () => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState(""); 
    const [cidade, setCidade] = useState("");
    //const [cidade_id, setCidade_id] = useState(null); 
    //const [bairro_id, setBairro_id] = useState(null);
    
    const [listaCidades, setListaCidades] = useState([]);
    const [dadosCarregadosCidade, setDadosCarregadosCidade] = useState(false);
   
    const [listaBairros, setListaBairros] = useState([]);
    const [dadosCarregadosBairro, setDadosCarregadosBairro] = useState(false);


    const handleConfirmar = () => {
      
        const pessoas = { codigo, nome, cidade, bairro, cep, endereco, numero, complemento, telefone, email };

        PessoaService.cadastrar(pessoas)
            .then(response => {
                response.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao realizar o cadastro!");
                // Limpa os campos após o cadastro
                setCodigo("");
                setNome("");
                setCidade("");
                setBairro("");
                setCep("");
                setEndereco("");
                setNumero("");
                setComplemento("");
                setTelefone("");
                setEmail("");
            })
            .catch(error => {
                console.error('Erro ao cadastrar Pessoa:', error);
            });
    }
    
    useEffect(() => {
        if (!dadosCarregadosCidade) {
            CidadeService.listar() 
                .then(response => {
                    setListaCidades(response.data);
                    setDadosCarregadosCidade(true); 
                })
                .catch(error => {
                    console.error('Erro ao carregar dados de Pessoa:', error);
                });
        }
    }, [dadosCarregadosCidade]);

    useEffect(() => {
        if(!dadosCarregadosBairro){
            BairroService.listar()
                .then(response => {
                    setListaBairros(response.data);
                    setDadosCarregadosBairro(true);
                })
                .catch(error => {
                    console.error('Erro ao carregar dados de Bairro:', error);
                });
        }
    })


    return (
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-pessoas">Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-pessoa"
                            options={listaCidades}
                            getOptionLabel={(option) => option.nome}
                            onChange={(e, newValue) => {
                                console.log(newValue); // Verifique se está imprimindo a cidade corretamente
                                newValue && setCidade(newValue.nome) // Correção aqui
                            }}
                            renderInput={(params) => <TextField {...params} label="Pessoa" value={cidade} />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-bairro"
                            options={listaBairros}
                            getOptionLabel={(option) => option.nome}
                            onChange={(e, newValue) => {
                                console.log(newValue); // Verifique se está imprimindo o bairro corretamente
                                newValue && setBairro(newValue.nome)
                            }}
                            renderInput={(params) => <TextField {...params} label="Bairro" value={bairro} />}
                        />
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary" className="confirmar" onClick={handleConfirmar}>Confirmar</Button>
                            <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    );
}

export default CadastroPessoa;