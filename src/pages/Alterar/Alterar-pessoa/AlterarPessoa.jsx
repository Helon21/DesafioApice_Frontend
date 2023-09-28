import React, {useState, useEffect} from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import style from './AlterarPessoa.module.css'
import { Link, useParams } from "react-router-dom";
import PessoaService from '../../../services/PessoaService';
import BairroService from '../../../services/BairroService';
import CidadeService from '../../../services/CidadeService';


const AlterarPessoa = () => {

    const {id} = useParams();
    const [codigo, setCodigo] = useState(""); 
    const [nome, setNome] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [bairros, setBairros] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [cidadesEscolhidas, setCidadesEscolhidas] = useState("");

    useEffect(() => {
        const listarBairros = async () => {
            try {
                const bairroLista = await BairroService.listar();
                setBairros(bairroLista.data);
                console.log(bairroLista.data)
            } catch (error) {
                console.error('Erro ao carregar bairros:', error);
            }
        }

        listarBairros();
    }, []);

    useEffect(() => {
        const listarCidade = async () => {
            try {
                const cidadeLista = await CidadeService.listar();
                setCidades(cidadeLista.data);
            } catch (error) {
                console.error('Erro ao carregar cidades:', error);
            }
        }
        
        listarCidade();
    }, []);

    
        

    const handleConfirmar = () => {

        const pessoaAtualizada = { codigo, nome, cep, endereco, numero, complemento, telefone, email };
        
        PessoaService.atualizar(id, pessoaAtualizada)
        .then(response => {
            response.status === 201 ? alert("Cadastro atualizado com sucesso!") : alert("Erro ao atualizar o cadastro!");
        })

    }
    

  return (
    <form>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary" component={Link} to="/listagem-pessoas">Listar</Button>
        </div>
        <div className={style.formulario}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Cidade</InputLabel>
                        <Select value={cidadesEscolhidas} onChange={(e) => setCidadesEscolhidas(e.target.value)}>
                            {cidades.map((item) => (
                                <MenuItem key={item.id} value={item.nome}>{item.nome}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Bairro</InputLabel>
                        <Select>
                            {bairros.map((item) => (
                                <MenuItem key={item.id} value={item.nome}>{item.nome}</MenuItem>
                            ))}
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


export default AlterarPessoa;