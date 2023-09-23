import React from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroProduto.module.css'
import { Link } from "react-router-dom";

const CadastroProduto = () => {
    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-produtos" >Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Código" />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Nome do Produto" />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Valor Venda" />
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary" className="confirmar">Confirmar</Button>
                            <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    )
}

export default CadastroProduto;