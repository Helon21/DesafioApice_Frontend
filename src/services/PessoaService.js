import axios from "axios";


class PessoaService {
    
    URL = "http://localhost:4000/api/pessoa";

    listar(){
        return axios.get(`${this.URL}/listar`);
    };

    listarBairros(){
        return axios.get(`${this.URL}/listar-bairros`);	
    }

    listarComFiltro(){
        return axios.get(`${this.URL}/listar-com-filtro`);
    };

    cadastrar(pessoa){
        return axios.post(`${this.URL}/cadastrar`, pessoa);
    };

    alterar(id, pessoa){
        return axios.put(`${this.URL}/atualizar/${id}`, pessoa);
    };

    deletar(id){
        return axios.delete(`${this.URL}/deletar/${id}`);
    }
};

export default new PessoaService();