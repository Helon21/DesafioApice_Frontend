import React, {useState, useEffect} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ListagemPessoas.module.css'
import { Link } from 'react-router-dom';
import PessoaService from '../../../services/PessoaService';


const ListaPessoas = () => {
    const [pessoas, setPessoas] = useState([]);


    useEffect(() => {
      const listarPessoas = async () => {
        try {
          const response = await PessoaService.listar();
          setPessoas(response.data);

        } catch (error) {
          console.error('Erro ao carregar cidades:', error);
        }
      }

      listarPessoas();
    }, []);

    const handleDelete = async (id) => {
      try {
        const response = await PessoaService.deletar(id);
        if (response.status === 200) {
          // Atualiza a lista de cidades após a exclusão bem-sucedida
          const updatedPessoas = pessoas.filter(item => item.id !== id);
          setPessoas(updatedPessoas);
          alert("Pessoa excluída com sucesso!");
        } else {
          alert("Erro ao excluir a pessoa!");
        }
      } catch (error) {
        console.error('Erro ao excluir a pessoa:', error);
      }
    }

  return (
    <div className={style.venda}>
        <div className={style.listagemInclusao}>
            <Button variant="contained" color="primary">Listar</Button>
            <Button variant="contained" color="primary" component={Link} to="/cadastro-pessoa" style={{ marginLeft: '8px' }}>Incluir</Button>
        </div>
        <Paper elevation={3} style={{ padding: '20px', width: '95%', margin: '20px auto' }}>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell align='right'>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pessoas.map(item => (
                <TableRow key={item.id}>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>{item.cidade}</TableCell>
                    <TableCell>{item.telefone}</TableCell>
                    <TableCell align="right">
                    <Box display="flex" justifyContent="flex-end"> 
                        <IconButton color="primary" size="small" component={Link} to={`/editar-pessoa/${item.id}`} >
                            <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" size="small" onClick={() => handleDelete(item.id)}>
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

export default ListaPessoas;
