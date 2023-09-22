import React from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroProduto.module.css'

const CadastroProduto = () => {
    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary">Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Código" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nome do Produto" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Valor Venda" />
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

export default CadastroProduto;