var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

//conecta-se com o banco de dados

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("loja");
        dbo.collection("produtos").find({"nome":/guarana/}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
