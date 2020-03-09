var ClienteMongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost/loja';

//conecta-se com o banco de dados
ClienteMongo.connect(url, function(erro, banco){
    //caso ocorra algum erro mostra
    if(erro) throw erro;

     var objeto = {
            'nome': 'Marcello',
            'email': 'marcello@teste.com' 
     };

     banco.collection('produtos').insertOne(objeto, function(erro, resultado){
         if(erro) throw erro;
            console.log('um documento inserido...');
        });

    // encerra a conexão com o banco
    banco.close();
});