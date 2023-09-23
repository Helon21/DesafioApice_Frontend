import React from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroBairro.module.css'
import { Link } from "react-router-dom";

const CadastroBairro = () => {
    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-bairros" >Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <TextField fullWidth label="Código" />
                    </Grid>
                    <Grid item xs={20} sm={8.5}>
                        <TextField fullWidth label="Bairro" />
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary">Confirmar</Button>
                            <Button variant="contained" color="secondary">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    )
}

export default CadastroBairro;