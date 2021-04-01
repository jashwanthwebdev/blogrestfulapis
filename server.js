//console.log('checking nodemon');  
const express = require('express');
const app = express();
const PORT = 2022
const dbConn = require('./DbConnection/dbmysql'); 
const registerRouter = require('./Routes/registerRoute'); 
const blogRouter     = require('./Routes/blogRoute');
const cors = require('cors');  
app.use(cors());   
app.use(express.json()); 
app.use('/api',registerRouter);
app.use('/api',blogRouter); 



app.listen(PORT,()=>{
    console.log(`PORT RUNNING ON SERVER ${PORT}`); 
}) 