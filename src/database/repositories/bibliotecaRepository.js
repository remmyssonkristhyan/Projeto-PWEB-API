const db = require("../index.js");
class bibliotecaRepository {
    async findAll() {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM livros";
        const [livros] = await conn.query(query);

        return livros;
    }

    async findById(id) {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM livros WHERE id = ?";
        const [livro] = await conn.query(query, [id]);

        return livro;
    }

    async create(livroData) {
        const conn = await db.connectToMysql();
        const query = "INSERT INTO livros (titulo, autor, isbn, resumo, ano_lancamento) VALUES (?, ?, ?, ?, ?)";
        const livro = await conn.query(query, [
            livroData.titulo, 
            livroData.autor,
            livroData.isbn,
            livroData.resumo,
            livroData.ano_lancamento
        ]);

        return livro;
    }

    async update(id, livroData) {
        const conn = await db.connectToMysql();
        const query = "UPDATE livros SET titulo = ?, autor = ?, isbn = ?, resumo = ?, ano_lancamento = ? WHERE id = ?";
        const livro = await conn.query(query, [
            livroData.titulo, 
            livroData.autor,
            livroData.isbn,
            livroData.resumo,
            livroData.ano_lancamento,
            id
        ]);

        return livro;
    }

    async delete(id) {
        const conn = await db.connectToMysql();
        const query = "DELETE FROM livros WHERE id = ?";
        await conn.query(query, [id]);
    }
}

module.exports = bibliotecaRepository;