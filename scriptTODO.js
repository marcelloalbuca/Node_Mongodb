var ClienteMongo = require('mongodb').MongoClient;

//conecta-se com o banco de dados
ClienteMongo.connect("mongodb://localhost:27017/loja", function(err, db){

    //caso ocorra algum erro mostra
    if(err) {return console.error(erro);}

    //acessar ou cria a coleção produtos
    
    db.collection('produtos', function(err, collection){
        if (err) return console.error(err);

        //remove todos os documentos de produtos
        collection.remove(null,{safe : true}, function(err,result){
            if(err) return console.error(err);
            console.log('result of remove ' + result.result);
        
            //criar 2 registros

            var produto1 = {
                        nome: "guarana", 
                        preco: 5.0 , 
                        quantidade: 30 
            };

            var produto2 = {
                nome: "cachorro-quente", 
                preco: 3.0 , 
                quantidade: 100 
            };

            collection.insertOne(produto1, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);

            collection.insertOne(produto2, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);
                
                collection.find({}).toArray(function(err, docs){
                    console.log('found documents');
                    console.dir(docs);

                    //fechar o banco de dados
                    db.close();
                    });
                });
            });
        });
    });
});