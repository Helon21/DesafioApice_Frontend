// CadastroForm.jsx
import React from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import style from './CadastroPessoa.module.css'
import { Link } from "react-router-dom";


const CadastroPessoa = () => {
  return (
    <form>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary" component={Link} to="/listagem-pessoas">Listar</Button>
            <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
        </div>
        <div className={style.formulario}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Código" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Nome" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Telefone" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="CEP" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Número" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Endereço" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Complemento" />
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
                        <Button variant="contained" color="primary" className="confirmar">Confirmar</Button>
                        <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
                    </Grid>
                </div>
            </Grid>
        </div>
    </form>
  );
}


export default CadastroPessoa;