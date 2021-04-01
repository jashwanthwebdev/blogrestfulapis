const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host : 'localhost',
    user :  'root',
    password : '',
    database  : 'myblog'
})
    
dbConn.connect((err)=>{
    if(err) return console.log('Database Not Connected');
    if(!err) return console.log('Database Connected Successfully'); 
})     

module.exports = dbConn;  