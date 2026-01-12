import express from "express";
import livro from "./livrosRoutes.js";
import autor from "./autoresRoutes.js";
import cliente from "./clienteRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livro, autor, cliente);
};

export default routes;
