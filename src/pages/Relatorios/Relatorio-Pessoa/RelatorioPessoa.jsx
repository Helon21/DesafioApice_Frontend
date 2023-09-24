import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography, FormControlLabel, Checkbox } from '@mui/material';
import style from './RelatorioPessoa.module.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const RelatorioPessoa = () => {
  const itens = [
    { id: 1, codigo: '001', nome: 'algum nome', cidade: 'alguma cidade', telefone: '4498877-5458'},
    { id: 2, codigo: '002', nome: 'ajsiak', cidade: 'akalski', telefone: '4478748-5458' },
    // Adicione mais itens conforme necessário
  ];
  
  const total = [
    {total: 100.50}
  ];

  return (
    <div>
        <div className={style.listagemInclusao}>
            <Typography variant="h6">
                Lista de Pessoas
            </Typography>
        </div>
        <div className={style.inclusaoVenda}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <FormControlLabel
                    control={<Checkbox />}
                    label="Parte do Nome:"
                    labelPlacement="start"
                    style={{ marginLeft: '8px' }}
                    />
                    <TextField fullWidth />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <FormControlLabel
                    control={<Checkbox />}
                    label="Cidade:"
                    labelPlacement="start"
                    style={{ marginLeft: '8px' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel> Cidade </InputLabel>
                        <Select>
                            <MenuItem value="pessoa1">Pessoa 1</MenuItem>
                            <MenuItem value="pessoa2">Pessoa 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <FormControlLabel
                    control={<Checkbox />}
                    label="Bairro:"
                    labelPlacement="start"
                    style={{ marginLeft: '8px' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel> Bairro </InputLabel>
                        <Select>
                            <MenuItem value="produto1">Produto 1</MenuItem>
                            <MenuItem value="produto2">Produto 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <div className={style.iconFiltro}>
                        <IconButton color="primary" size="large">
                            <FilterAltIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div>
            <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>nome</TableCell>
                    <TableCell align='center'>Cidade</TableCell>
                    <TableCell align='right'>telefone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itens.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell align='center'>{item.cidade}</TableCell>
                        <TableCell align="right">{item.telefone}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </div>
    </div>
  );
}


export default RelatorioPessoa;
