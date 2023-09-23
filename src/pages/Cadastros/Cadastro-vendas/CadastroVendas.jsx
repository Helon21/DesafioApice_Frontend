import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './CadastroVendas.module.css'
import { Link } from 'react-router-dom';

const CadastroVenda = () => {
  const itens = [
    { id: 1, codigo: '001', produto: 'Caneta Conversível', quantidadeVenda: '1', valorUnitario: 'R$ 100,00', subTotal: 'R$ 100,00' },
    { id: 2, codigo: '002', produto: 'Bugatti de brinquedo', quantidadeVenda: '2', valorUnitario: 'R$ 100,00', subTotal: 'R$ 100,00' },
    // Adicione mais itens conforme necessário
  ];
  
  const total = [
    {total: 100.50}
  ];

  return (
    <div>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary" component={Link} to="/listagem-venda" >Listar</Button>
            <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
        </div>
        <div className={style.inclusaoVenda}>
            <Grid container spacing={2}>
                <Grid item xs={5} sm={2.5}>
                    <TextField fullWidth label="Código" />
                </Grid>
                <Grid item xs={5} sm={2.5}>
                    <TextField fullWidth label="Data Venda"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel> Pessoa </InputLabel>
                        <Select>
                            <MenuItem value="pessoa1">Pessoa 1</MenuItem>
                            <MenuItem value="pessoa2">Pessoa 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel> Produto </InputLabel>
                        <Select>
                            <MenuItem value="produto1">Produto 1</MenuItem>
                            <MenuItem value="produto2">Produto 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={2}> 
                    <TextField fullWidth label="Qtde Venda"/>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <TextField fullWidth label="Vr. Unitário"/>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <TextField fullWidth label="Sub.Total"/>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <div className={style.iconCarrinho}>
                        <IconButton color="primary" size="large">
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className={style.carrinhoCompras}>
            <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Qtde Venda</TableCell>
                    <TableCell>Vr.Unitário</TableCell>
                    <TableCell>Sub.Total</TableCell>
                    <TableCell align='right'>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itens.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.produto}</TableCell>
                        <TableCell>{item.quantidadeVenda}</TableCell>
                        <TableCell>{item.valorUnitario}</TableCell>
                        <TableCell>{item.subTotal}</TableCell>
                        <TableCell align="right">
                        <Box display="flex" justifyContent="flex-end"> {/* Adiciona um espaço entre os botões */}
                            <IconButton color="primary" size="small">
                            <EditIcon />
                            </IconButton>
                            <IconButton color="secondary" size="small">
                            <DeleteIcon />
                            </IconButton>
                        </Box>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </div>
        <div className={style.confirmarCancelar}>
            <Button variant="contained" color="primary" className="confirmar">Confirmar</Button>
            <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
        </div>
        <div className={style.valorTotal}>
            <Paper elevation={3} className={style.paperTotalVenda}>
                <Typography variant="h6" gutterBottom>
                    Total Venda
                </Typography>
                <Typography variant="h6" gutterBottom>
                    R${total.tofixed}
                </Typography>
            </Paper>
        </div>
    </div>
  );
}


export default CadastroVenda;
