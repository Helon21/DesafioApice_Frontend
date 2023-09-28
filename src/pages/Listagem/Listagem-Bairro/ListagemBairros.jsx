import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemBairros.module.css'
import { Link,  } from 'react-router-dom';
import BairroService from '../../../services/BairroService';


const ListaBairros = () => {
    const [bairros, setBairros] = useState([]);

    useEffect(() => {
        const listarBairros = async () => {
            try {
                const response = await BairroService.listar();
                setBairros(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Erro ao carregar bairros:', error);
            }
        }

        listarBairros();
    }, []);

  return (
    <div className={style.venda}>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary">Listar</Button>
        </div>
        <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Bairro</TableCell>
                <TableCell align='right'>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {bairros.map(item => (
                <TableRow key={item.id}>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell align="right">
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton color="primary" size="small" component={Link} to={`/editar-bairro/${item.id}`}>
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

export default ListaBairros;
