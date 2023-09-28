import axios from "axios";

export class ProdutoService{
    URL = "http://localhost:4000/produtos";

    listar(){
        return axios.get(`${this.URL}/listar`);
    };

    cadastrar(produto){
        return axios.post(`${this.URL}/cadastrar`, produto);
    };

    alterar(id, produto){
        return axios.put(`${this.URL}/atualizar/:${id}`, produto);
    };

    deletar(id){
        return axios.delete(`${this.URL}/deletar/:${id}`);
    }

}