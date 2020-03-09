var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost/loja';

//conecta-se com o banco de dados
ClienteMongo.connect(url, function(erro, banco){
    //caso ocorra algum erro mostra
    if(erro) throw erro;

    //cria a coleção através do método createCollection
    banco.createCollection("produtos", function(erro, resultado){
        //trata o erro
        if(erro) throw erro;
        //envio a mensagem de coleção criada
        console.log("Coleção criada com sucesso");
    });

    // encerra a conexão com o banco
    banco.close();

});