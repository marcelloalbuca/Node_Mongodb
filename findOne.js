var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost/loja';

//conecta-se com o banco de dados
ClienteMongo.connect(url, function(erro, banco){
    //caso ocorra algum erro mostra
    if(erro) throw erro;

     banco.collection('produtos').findOne({}, function(erro, resultado){
         if(erro) throw erro;
            console.log(resultado);
        });

    // encerra a conexão com o banco
    banco.close();
});