const mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/employeedata";

mongo.connect(url,{useNewUrlParser:true},function(err,db){
    if (err) throw err;
    console.log("1.db created Wohoo");
    var dbo = db.db('employeedata');
    dbo.createCollection("records",function(err,res){
        if (err) throw err;
        console.log("collection created");
        res.insertOne({name:"sourav",salary:42000},function(err,res){
            if (err) throw err;
            console.log("record inserted");
            db.close();
        });
    });
});
