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
//função teste homepage
app.get("/", (req, res) => {
    try{
       return res.render("index.ejs");
    }catch(err){
        console.error(err.message);
    };
});
//função teste detalhes
app.get("/detail", (req, res) => {
    try{
        return res.render("detail.ejs");
     }catch(err){
         console.error(err.message);
    };
});
//função teste formulário
app.get("/add", (req, res) => {
    try{
        return res.render("form.ejs");
     }catch(err){
         console.error(err.message);
    };
});
//Função teste página de busca
app.get("/search", (req, res) => {
    try{
        return res.render("search.ejs");
     }catch(err){
         console.error(err.message);
    };
});
//Função teste resultados da busca
app.get("/result", (req, res) => {
    try{
        return res.render("results.ejs");
     }catch(err){
         console.error(err.message);
    };
});
//Função teste página de erro
app.get("/error", (req, res) => {
    try{
        return res.render("error.ejs");
     }catch(err){
         console.error(err.message);
    };
});

//Função teste página de contato
app.get("/contact", (req, res) => {
    try{
        return res.render("contact.ejs");
     }catch(err){
         console.error(err.message);
    };
});


//função escutadora
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });