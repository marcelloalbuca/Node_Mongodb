'use strict';
var ClienteMongo = require('mongodb').MongoClient;

var url = "mongodb://localhost/loja";

ClienteMongo.connect(url, function(erro, banco){

    if(erro) throw erro;

    console.log("Banco " + dbname + " Criado");

    banco.close;

});