// CadastroForm.jsx
import React, {useState} from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import style from './CadastroPessoa.module.css'
import { Link } from "react-router-dom";
import PessoaService from '../../../services/PessoaService';


const CadastroPessoa = () => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");

    const handleConfirmar = () => {
        const pessoa = { codigo, nome, telefone, email, cep, numero, endereco, complemento };
        PessoaService.cadastrar(pessoa)
            .then(response => {
                response.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao realizar o cadastro!");
                // Limpa os campos após o cadastro
                setCodigo("");
                setNome("");
                setTelefone("");
                setEmail("");
                setCep("");
                setNumero("");
                setEndereco("");
                setComplemento("");
            })
            .catch(error => {
                console.error('Erro ao cadastrar Pessoa:', error);
            });
    }
    

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
                        <FormControl fullWidth>
                            <InputLabel>Cidade</InputLabel>
                            <Select>
                                <MenuItem value="cidade1">Cidade 1</MenuItem>
                                <MenuItem value="cidade2">Cidade 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Bairro</InputLabel>
                            <Select>
                                <MenuItem value="bairro1">Bairro 1</MenuItem>
                                <MenuItem value="bairro2">Bairro 2</MenuItem>
                            </Select>
                        </FormControl>
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