const jwt = require('jsonwebtoken'); 
const dbConn = require('../DbConnection/dbmysql'); 
exports.checkRequest = (req,res,next)=>{
           const token = req.headers.authorization.split(' ')[1]; 
           if(token){
            var decoded = jwt.verify(token, 'MyBlog');
            req.user = decoded;  
           // console.log(decoded.foo); 
            // var sql = `select * from registration where Rid=${decoded.foo}`;
            // dbConn.query(sql,(err,data)=>{
            //     if(err)   res.status(400).send({err:'Something went wrong..'}); 
            //     if(data.length > 0){
            //            req.user = data;  
            //          //  console.log(req.user);  
            //         // next();  
                      
            //     }else{
            //        return res.status(400).send({message:'Sorry Your dont have any records with this account'})
            //     }
            //     //console.log(data); 
            // }) 
           }else{
             return  req.status(400).send({message:'Authorization failed....'})
             
           }
           next(); 
         //  console.log(token); 
          // console.log('checkking token user'); 
} 

exports.adminMiddleware = (req,res,next)=>{  
            //console.log(req.user.foo ); 
            var sql = `select * from registration where Rid=${req.user.foo}`;
            dbConn.query(sql,(err,data)=>{
                if(err)   res.status(400).send({err:'Something went wrong..'}); 
                if(data.length > 0){
                     //  req.user = data;   
                    //   console.log(data);   
                    // next();    
                    if(data[0].role != 'admin'){
                        res.status(200).send({message:'Sorry You Are Not Admin........'});
                       // next(); 
                    }  
                       
                }else{
                   res.status(400).send({message:'Sorry Your dont have any records with this account'})
                  // next();  
                } 
                //console.log(data);  
            })    
            next(); 
}  