import React, {useEffect, useState} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemVendas.module.css'
import { Link } from 'react-router-dom';
import VendaService from '../../../services/VendaService';


const ListaItens = () => {
  
    const [vendas, setVendas] = useState([]);


    useEffect(() => {
      const listarVendas = async () => {
        try {
          const response = await VendaService.listar();
          setVendas(response.data);

        } catch (error) {
          console.error('Erro ao carregar cidades:', error);
        }
      }

      listarVendas();
    }, []);


    const handleDelete = async (id) => {
        try {
          const response = await VendaService.deletar(id);
          if (response.status === 200) {
            // Atualiza a lista de cidades após a exclusão bem-sucedida
            const updatedVendas = vendas.filter(item => item.id !== id);
            setVendas(updatedVendas);
            alert("Venda excluída com sucesso!");
          } else {
            alert("Erro ao excluir a Venda!");
          }
        } catch (error) {
          console.error('Erro ao excluir a Venda:', error);
        }
    }


  return (
    <div className={style.venda}>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary">Listar</Button>
            <Button variant="contained" color="primary" component={Link} to="/cadastro-venda" style={{ marginLeft: '8px' }}>Incluir</Button>
        </div>
        <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Pessoa</TableCell>
                <TableCell>Total Vendas</TableCell>
                <TableCell align='right'>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {vendas.map(item => (
                <TableRow key={item.id}>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item.pessoa}</TableCell>
                    <TableCell>{item.totalVendas}</TableCell>
                    <TableCell align="right">
                    <Box display="flex" justifyContent="flex-end"> 
                        <IconButton color="primary" size="small" component={Link} to={`/editar-venda/${item.id}`} >
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

export default ListaItens;
