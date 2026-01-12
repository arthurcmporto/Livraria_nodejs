import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Parte de conexão com o bando de dados usando a função conectaDB 
const conexao = await conectaDB();

conexao.on("error", (erro)=>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("Conexao feita com sucesso!");
});


// chama a funcao express do próprio freamework 
const app = express();

// Executa as rotas que estao criadas em livrosRoutes
routes(app);


export default app;

