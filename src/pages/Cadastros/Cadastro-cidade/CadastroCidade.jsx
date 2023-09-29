import React, {useState} from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroCidade.module.css'
import { Link } from "react-router-dom";
import CidadeService from "../../../services/CidadeService";

const CadastroCidade = () => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [sigla, setSiglaUF] = useState("");

    const handleConfirmar = () => {
        const cidades = { codigo, nome, sigla };
        CidadeService.cadastrar(cidades)
            .then(response => {
                response.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao realizar o cadastro!");
                // Limpa os campos após o cadastro
                setCodigo("");
                setNome("");
                setSiglaUF("");
            })
            .catch(error => {
                console.error('Erro ao cadastrar cidade:', error);
            });
    }


    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-cidades">Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Cidade" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Sigla UF" value={sigla} onChange={(e) => setSiglaUF(e.target.value)}/>
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary" onClick={handleConfirmar}>Confirmar</Button>
                            <Button variant="contained" color="secondary">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    )
}

export default CadastroCidade;
