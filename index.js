//Importações padrão
import express from "express"; //framework principal
import bodyParser from "body-parser"; // middleware para requisições
import pg from "pg"; //banco de dados

const app = express(); //declaração da variável de servidor
const PORT = 3000; //declaração da porta a ser usada. Uso 3000 por padrão.

//configuralção dos middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public")); //não é exatamente sobre middleware, mas é importante para declaração da pasta public como referencia de assets
//função teste
app.get("/", (req, res) => {
    res.send("Bem-vindo ao DasBuch!");
  });
//função escutadora
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });