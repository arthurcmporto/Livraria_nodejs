import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

class LivroController {

    // método get
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição`});
        }
    }

    //get por id
    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const LivroEncontrado = await livro.findById(id);
            res.status(200).json(LivroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição`});
        }
    }

    // método post
    static async adicionaLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: { ... autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso!", livro: livroCriado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` })
        }

    }

    // método put
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado!"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização do livro`});
        }
    }

    // método delete
    static async deletaLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso!"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na exclusão do livro`});
        }
    }

};


export default LivroController;
