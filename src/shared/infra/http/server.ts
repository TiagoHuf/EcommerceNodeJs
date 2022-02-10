import "reflect-metadata"; //Deve ser a primeira importação
import express from "express";
import "express-async-errors";
import "../typeorm"; //Cria a conexão com o banco de dados
import routes from "./routes/index.routes";
import ErrorHandler from "./middlewares/ErrorHandler";

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log("Servidor Iniciado!");
});