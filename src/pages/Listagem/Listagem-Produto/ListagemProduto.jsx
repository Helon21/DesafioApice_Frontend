import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemProduto.module.css'
import { Link } from 'react-router-dom';

const ListaProdutos = () => {
  const itens = [
    { id: 1, codigo: '001', NomeProduto: 'Celular', valorVenda: 'R$ 1.000,00'},
    { id: 2, codigo: '002', NomeProduto: 'Carbono 14', valorVenda: 'R$ 1.000.000,00' },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className={style.venda}>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary" >Listar</Button>
            <Button variant="contained" color="primary" component={Link} to="/cadastro-pessoa" style={{ marginLeft: '8px' }}>Incluir</Button>
        </div>
        <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Nome Produto</TableCell>
                <TableCell>Valor Venda</TableCell>
                <TableCell align='right'>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {itens.map(item => (
                <TableRow key={item.id}>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>{item.valorVenda}</TableCell>
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
  );
}

export default ListaProdutos;
