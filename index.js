//Importações padrão
import express from "express"; //framework principal
import bodyParser from "body-parser"; // middleware para requisições
import pg from "pg"; //banco de dados
import { Translator } from "./locale.js";

const app = express(); //declaração da variável de servidor
const PORT = 3000; //declaração da porta a ser usada. Uso 3000 por padrão.
//Campo dedicado à internacionalização
const tr = new Translator('en'); //inicia com a linguagem em inglês por padrão
await tr.applyLanguage('en');
//configuralção dos middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public")); //não é exatamente sobre middleware, mas é importante para declaração da pasta public como referencia de assets
//função teste homepage
app.get("/", (req, res) => {
    try{
       return res.render("index.ejs",{
        translator: tr.currentDic,
       });
    }catch(err){
        console.error(err.message);
    };
});
//função teste detalhes
app.get("/detail", (req, res) => {
    try{
        return res.render("detail.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});
//função teste formulário
app.get("/add", (req, res) => {
    try{
        return res.render("form.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});
//Função teste página de busca
app.get("/search", (req, res) => {
    try{
        return res.render("search.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});
//Função teste resultados da busca
app.get("/result", (req, res) => {
    try{
        return res.render("results.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});
//Função teste página de erro
app.get("/error", (req, res) => {
    try{
        return res.render("error.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});

//Função teste página de contato
app.get("/contact", (req, res) => {
    try{
        return res.render("contact.ejs",{
            translator: tr.currentDic,
           });
     }catch(err){
         console.error(err.message);
    };
});
//Endpoints para utilidade
app.get("/lang/:lng", async (req, res) => { //mudança de idioma, anexado ao footer de toda página, requisição por botão.
    const { lng } = req.params;
    try{
        await tr.applyLanguage(lng);
        res.status(200).send('You have changed the language succesfully');
     }catch(err){
         console.error(err.message);
    };
});

//função escutadora
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });