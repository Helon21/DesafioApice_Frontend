import React, {useState} from "react";
import { TextField, Button, Grid } from '@mui/material';
import style from './CadastroProduto.module.css'
import { Link } from "react-router-dom";
import ProdutoService from "../../../services/ProdutoService";


const CadastroProduto = () => {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [vr_venda, setVrVenda] = useState("");

    const handleConfirmar = () => {
        const produtos = { codigo, nome, vr_venda };
        ProdutoService.cadastrar(produtos)
            .then(response => {
                response.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao realizar o cadastro!");
                // Limpa os campos após o cadastro
                setCodigo("");
                setNome("");
                setVrVenda("");
                
            })
            .catch(error => {
                console.error('Erro ao cadastrar o Produto:', error);
            });
    }
    
    return(
        <form>
            <div className={style.listagemInclusao}>
                <Button variant="contained" color="primary" component={Link} to="/listagem-produtos" >Listar</Button>
                <Button variant="contained" color="primary" style={{ marginLeft: '8px' }}>Incluir</Button>
            </div>
            <div className={style.formulario}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Nome do Produto" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField fullWidth label="Valor Venda" value={vr_venda} onChange={(e) => setVrVenda(e.target.value)}/>
                    </Grid>
                    <div className={style.confirmarExcluir}>
                        <Grid item xs={12} >
                            <Button variant="contained" color="primary" className="confirmar" onClick={handleConfirmar}>Confirmar</Button>
                            <Button variant="contained" color="secondary" className="cancelar">Cancelar</Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </form>
    )
}

export default CadastroProduto;