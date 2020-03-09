var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost/loja';

//conecta-se com o banco de dados
ClienteMongo.connect(url, function(erro, banco){
    //caso ocorra algum erro mostra
    if(erro) throw erro;
    //mensagem que o banco foi criado
    console.log("Banco Criado");
    // encerra a conexão com o banco
    banco.close();

});