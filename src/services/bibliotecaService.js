const bibliotecaRepository = require('../database/repositories/bibliotecaRepository.js');

class bibliotecaService {

    constructor(){
        this.repository = new bibliotecaRepository();
    }

    async getAllLivros(){
        return this.repository.findAll();
    };

    async getLivroById(id){
        return this.repository.findById(id);
    };

    async createlivro(livro){
        return this.repository.create(livro);
    };

    async updateLivro(id, livro){
        return this.repository.update(id, livro);
    };

    async deleteLivro(id){
        return this.repository.delete(id);
    };
};

module.exports = bibliotecaService;