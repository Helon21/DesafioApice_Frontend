import axios from "axios";

class CidadeService {
    URL = "http://localhost:4000/api/cidade";


    listar() {
        return axios.get(`${this.URL}/listar`);
    }

    cadastrar(cidade) {
        return axios.post(`${this.URL}/cadastrar`, cidade);
    }

    atualizar(id, cidade) {
        return axios.put(`${this.URL}/atualizar/${id}`, cidade);
    }

    deletar(id) {
        return axios.delete(`${this.URL}/deletar/${id}`);
    }

}


export default new CidadeService();