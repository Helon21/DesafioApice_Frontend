import React, {useState} from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './AlterarCidade.module.css'
import { Link, useParams } from "react-router-dom";
import CidadeService from "../../../services/CidadeService";

const AlterarCidade = () => {
    
    const {id} = useParams();
    const [codigo, setCodigo] = useState(""); 
    const [nome, setCidade] = useState("");
    const [sigla, setUF] = useState(""); 

    const handleConfirmar = () => {

        const cidadeAtualizada = { codigo, nome, sigla };
        
        CidadeService.atualizar(id, cidadeAtualizada)
        .then(response => {
            response.status === 201 ? alert("Cadastro atualizado com sucesso!") : alert("Erro ao atualizar o cadastro!");
        })

    }
    
    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-cidades">Listar</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Cidade" value={nome} onChange={(e) => setCidade(e.target.value)} />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Sigla UF" value={sigla} onChange={(e) => setUF(e.target.value)} />
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

export default AlterarCidade;
