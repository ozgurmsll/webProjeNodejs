const mysql=require('mysql2');
const db=require('../dblogin');
let connection=mysql.createConnection(db.db)
connection.connect(function(err){
    if(err){
        console.log(err);
    }
    connection.query("select * from products",function(err,result){
    })
    console.log("database bağlantısı yapıldı");
})


module.exports=connection.promise();