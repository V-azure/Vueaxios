const mysql = require("mysql");
var client = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"2022ego"
})

function sqlFn(sql,arr,callback){
    client.query(sql,arr,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        // 回调函数
        callback(result)
    })
}

module.exports = sqlFn