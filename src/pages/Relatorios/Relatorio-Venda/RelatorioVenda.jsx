import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography, FormControlLabel, Checkbox } from '@mui/material';
import style from './RelatorioVenda.module.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const RelatorioVenda = () => {
  const itens = [
    { id: 1, codigo: '001', pessoa: 'algum nome', totalVenda: '100.50'},
    { id: 2, codigo: '002', pessoa: 'ajsiak', totalVenda: '200.50'},
    // Adicione mais itens conforme necessário
  ];
  
  const total = [
    {total: 100.50}
  ];

  return (
    <div>
        <div className={style.listagemInclusao}>
            <Typography variant="h6">
                Lista de Vendas
            </Typography>
        </div>
        <div className={style.inclusaoVenda}>
            <Grid container spacing={2}>
                <Grid item xs={8} sm={4}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Periodo de Inicio:"
                        labelPlacement="start"
                        style={{ marginLeft: '8px' }}
                    />
                    <TextField fullWidth />
                </Grid>
                <Grid item xs={8} sm={4} >
                    <TextField fullWidth />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pessoa:"
                        labelPlacement="start"
                        style={{ marginLeft: '8px' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel> Pessoa </InputLabel>
                        <Select>
                            <MenuItem value="pessoa1">Pessoa 1</MenuItem>
                            <MenuItem value="pessoa2">Pessoa 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Produto:"
                        labelPlacement="start"
                        style={{ marginLeft: '8px' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel> Produto </InputLabel>
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
                    <TableCell align='center'>Pessoa</TableCell>
                    <TableCell align='right'>Total Venda</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itens.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell align='center'>{item.pessoa}</TableCell>
                        <TableCell align="right">{item.totalVenda}</TableCell>
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


export default RelatorioVenda;
