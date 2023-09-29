import React, {useState} from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroBairro.module.css'
import { Link } from "react-router-dom";
import BairroService from "../../../services/BairroService";

const CadastroBairro = () => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");

    const handleConfirmar = () => {
        const bairros = { codigo, nome };
        BairroService.cadastrar(bairros)
            .then(response => {
                response.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao realizar o cadastro!");
                // Limpa os campos após o cadastro
                setCodigo("");
                setNome("");
            })
            .catch(error => {
                console.error('Erro ao cadastrar bairro:', error);
            });
    }


    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-bairros" >Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </Grid>
                    <Grid item xs={20} sm={8.5}>
                        <TextField fullWidth label="Bairro" value={nome} onChange={(e) => setNome(e.target.value)}/>
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

export default CadastroBairro;