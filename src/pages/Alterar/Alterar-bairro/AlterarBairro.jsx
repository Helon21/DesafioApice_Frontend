import React, {useState} from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './AlterarBairro.module.css'
import { Link, useParams } from "react-router-dom";
import BairroService from "../../../services/BairroService";

const AlterarBairro = () => {

    
    const {id} = useParams();
    const [codigo, setCodigo] = useState(""); 
    const [nome, setNome] = useState("");

    const handleConfirmar = () => {

        const bairroAtualizado = { codigo, nome };
        
        BairroService.atualizar(id, bairroAtualizado)
        .then(response => {
            response.status === 201 ? alert("Cadastro do bairro atualizado com sucesso!") : alert("Erro ao atualizar o cadastro do bairro!");
        })

    }

    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-bairros" >Listar</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </Grid>
                    <Grid item xs={20} sm={8.5}>
                        <TextField fullWidth label="Bairro" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary" onClick={handleConfirmar} >Confirmar</Button>
                            <Button variant="contained" color="secondary">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    )
}

export default AlterarBairro;