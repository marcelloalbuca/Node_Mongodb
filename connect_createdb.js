var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost/loja';

//conecta-se com o banco de dados
ClienteMongo.connect(url, function(erro, banco){
    //caso ocorra algum erro mostra
    if(erro) throw erro;

    //cria a coleção através do método createCollection
    banco.createCollection("produtos")

    console.log("Banco Criado");

    banco.close;

});