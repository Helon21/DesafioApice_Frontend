import axios from "axios";

class BairroService {
    URL = "http://localhost:4000/api/bairro";


    listar() {
        return axios.get(`${this.URL}/listar`);
    }

    cadastrar(bairro) {
        return axios.post(`${this.URL}/cadastrar`, bairro);
    }

    atualizar(id, bairro) {
        return axios.put(`${this.URL}/atualizar/${id}`, bairro);
    }

    deletar(id) {
        return axios.delete(`${this.URL}/deletar/${id}`);
    }

}


export default new BairroService();