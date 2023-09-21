import React from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroBairro.module.css'

const CadastroBairro = () => {
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