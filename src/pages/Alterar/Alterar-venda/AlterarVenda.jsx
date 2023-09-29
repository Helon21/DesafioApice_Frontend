import React, {useState} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button, Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './AlterarVenda.module.css'
import { Link, useParams } from 'react-router-dom';
import VendaService from '../../../services/VendaService';

const AlterarVenda = () => {

    const {id} = useParams();
    const [codigo, setCodigo] = useState("");
    const [dataVenda, setDataVenda] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [ vr_venda, setVrVenda ] = useState("");
    const [subtotal, setSubtotal] = useState("");
    const [vendas, setVendas] = useState([]);

    
    const handleConfirmar = () => {

        const produtoAtualizado = { codigo, dataVenda, quantidade, vr_venda, subtotal };
        
        VendaService.atualizar(id, produtoAtualizado)
        .then(response => {
            response.status === 201 ? alert("Cadastro atualizado com sucesso!") : alert("Erro ao atualizar o cadastro!");
        })

    }
    

    return (
        <div>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-venda" >Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.inclusaoVenda}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sm={2.5}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </Grid>
                    <Grid item xs={5} sm={2.5}>
                        <TextField fullWidth label="Data Venda" value={dataVenda} onChange={(e) => setDataVenda(e.target.value)} />
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
                        <TextField fullWidth label="Qtde Venda" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <TextField fullWidth label="Vr. Unitário" value={vr_venda} onChange={(e) => setVrVenda(e.target.value)}/>
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
                        {vendas.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.codigo}</TableCell>
                            <TableCell>{item.dataVenda}</TableCell>
                            <TableCell>{item.quantidade}</TableCell>
                            <TableCell>{item.vr_venda}</TableCell>
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
                <Button variant="contained" color="primary" className="confirmar" onClick={handleConfirmar}>Confirmar</Button>
                <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
            </div>
            <div className={style.valorTotal}>
                <Paper elevation={3} className={style.paperTotalVenda}>
                    <Typography variant="h6" gutterBottom>
                        Total Venda
                    </Typography>
                    <Typography variant="h6" gutterBottom>

                    </Typography>
                </Paper>
            </div>
        </div>
    );
}


export default AlterarVenda;
