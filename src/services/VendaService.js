import axios from "axios";

class VendaService{
    URL = "http://localhost:4000/venda";

    listar(){
        return axios.get(`${this.URL}/listar`);
    };

    cadastrar(venda){
        return axios.post(`${this.URL}/cadastrar`, venda);
    };

    incluirItem(venda){
        return axios.post(`${this.URL}/incluir-item`, venda);
    };

    atualizarVenda(id, venda){
        return axios.put(`${this.URL}/atualizar/:${id}`, venda);
    };

    deletar(id){
        return axios.delete(`${this.URL}/deletar/:${id}`);
    }
}

export default new VendaService();