const bibliotecaService = require('../services/bibliotecaService');

exports.get = async (req, res, next) => {
    const payLoad = await new bibliotecaService().getAllLivros();
    res.status(200).send(payLoad);
}

exports.getById = async (req, res, next) => {
    const payLoad = await new bibliotecaService().getLivroById(req.params.id);
    res.status(200).send(payLoad);
}

exports.post = async (req, res, next) => {
    try {
        const payLoad = await new bibliotecaService().createLivro(req.body);
        res.status(201).send(payLoad);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const payLoad = await new bibliotecaService().updateLivro(id, body);
        res.status(200).send(payLoad);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;

        const oldLivro = await new bibliotecaService().getLivroById(id);

        if (!oldLivro || oldLivro.length === 0) {
            throw new Error(`livro with id ${id} not found`);
        }

        const payLoad = await new bibliotecaService().deleteLivro(id);
        res.status(204).send(payLoad);
    } catch (error) {
        res.status(404).send({
            message: error.message
        });
    }
}