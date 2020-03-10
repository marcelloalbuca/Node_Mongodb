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

            var produto3 = {
                nome: "hamburguer", 
                preco: 4.0 , 
                quantidade: 20
            };

            var produto4 = {
                nome: "x-hamburguer", 
                preco: 5.0 , 
                quantidade: 30
            };

            var produto5 = {
                nome: "água", 
                preco: 1.0 , 
                quantidade: 30
            };

            //Inserindo os Produtos
            collection.insertOne(produto1, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);

            collection.insertOne(produto2, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);

            collection.insertOne(produto3, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);
            
            collection.insertOne(produto4, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);

            collection.insertOne(produto5, {p:1}, function(err, result) {
                if(err) return console.error(err);
                console.log(result.insertedId);
                
            //Trazendo todos os registros
            collection.find({}).toArray(function(err, docs){
                console.log('found documents');
                console.dir(docs);

            //filtrando pelo último registro    
            var dbo = db.db("loja");    
            dbo.collection("produtos").find({}).sort({"_id":-1}).limit(1).toArray(function(err, result) {
                if (err) throw err;
                console.log('Último Registro');
                console.log(result);
            });

            //filtrando por nome
            dbo.collection("produtos").find({"nome":/guarana/}).toArray(function(err, result) {
                if (err) throw err;
                console.log('Filtro por nome');
                console.log(result);

              });

            //fechar o banco de dados
            db.close();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });