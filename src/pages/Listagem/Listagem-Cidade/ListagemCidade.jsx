import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemCidade.module.css'
import { Link } from 'react-router-dom';
import CidadeService from '../../../services/CidadeService';

const ListaCidades = () => {


    const [cidades, setCidades] = useState([]);


    useEffect(() => {
      const listarCidades = async () => {
        try {
          const response = await CidadeService.listar();
          setCidades(response.data);

        } catch (error) {
          console.error('Erro ao carregar cidades:', error);
        }
      }

      listarCidades();
    }, []);
    

    const handleDelete = async (id) => {
      try {
        const response = await CidadeService.deletar(id);
        if (response.status === 200) {
          // Atualiza a lista de cidades após a exclusão bem-sucedida
          const updatedCidades = cidades.filter(item => item.id !== id);
          setCidades(updatedCidades);
          alert("Cidade excluída com sucesso!");
        } else {
          alert("Erro ao excluir a cidade!");
        }
      } catch (error) {
        console.error('Erro ao excluir a cidade:', error);
      }
    }

    return (
        <div className={style.venda}>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary">Listar</Button>
                <Button variant="contained" color="primary" component={Link} to="/cadastro-cidade" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>Cidade</TableCell>
                    <TableCell>Sigla UF</TableCell>
                    <TableCell align='right'>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cidades.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.sigla}</TableCell>
                          <TableCell align="right">
                        <Box display="flex" justifyContent="flex-end"> 
                            <IconButton color="primary" size="small" component={Link} to={`/editar-cidade/${item.id}`}>
                              <EditIcon />
                            </IconButton>
                            <IconButton color="secondary" size="small" onClick={() => handleDelete(item.id)}>
                            <DeleteIcon/>
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

export default ListaCidades;
