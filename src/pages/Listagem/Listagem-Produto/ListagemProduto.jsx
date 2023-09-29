import React, {useState, useEffect} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemProduto.module.css'
import { Link } from 'react-router-dom';
import ProdutoService from '../../../services/ProdutoService';

const ListaProdutos = () => {
  
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
      const listarProdutos = async () => {
        try {
          const response = await ProdutoService.listar();
          setProdutos(response.data);

        } catch (error) {
          console.error('Erro ao carregar cidades:', error);
        }
      }

      listarProdutos();
    }, []);

    const handleDelete = async (id) => {
        try {
          const response = await ProdutoService.deletar(id);
          if (response.status === 200) {
            // Atualiza a lista de cidades após a exclusão bem-sucedida
            const updatedProdutos = produtos.filter(item => item.id !== id);
            setProdutos(updatedProdutos);
            alert("Produto excluído com sucesso!");
          } else {
            alert("Erro ao excluir o Produto!");
          }
        } catch (error) {
          console.error('Erro ao excluir o Produto:', error);
        }
    }

    return (
        <div className={style.venda}>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" >Listar</Button>
                <Button variant="contained" color="primary" component={Link} to="/cadastro-produto" style={{ marginLeft: '8px' }}>Incluir</Button>
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
                    {produtos.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.vr_venda}</TableCell>
                        <TableCell align="right">
                        <Box display="flex" justifyContent="flex-end"> 
                            <IconButton color="primary" size="small" component={Link} to={`/editar-produto/${item.id}`}>
                            <EditIcon />
                            </IconButton>
                            <IconButton color="secondary" size="small" onClick={() => handleDelete}>
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
