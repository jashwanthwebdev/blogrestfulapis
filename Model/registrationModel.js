const dbConn = require('../DbConnection/dbmysql'); 
const bcrypt = require('bcrypt'); 
const jwt    = require('jsonwebtoken'); 
const Registration = function(registration){
    this.firstname = registration.firstname;
    this.lastname  = registration.lastname;
    this.mobile    = registration.mobile;
    this.username  = registration.username;
    this.email     = registration.email;
    this.password  = registration.password; 
    this.role      = registration.role ? registration.role : 'admin'; 
}  
 
Registration.create = (registration,result)=>{
    dbConn.query('select count(*) as total from registration where email=?',registration.email,(err,res)=>{
         if(err) console.log('Something went wrong...'); result(err,null);
         if(res){   
            if(res[0].total == 0){
                console.log('insert success') 
                dbConn.query('Insert into registration set ?',registration,(err,res)=>{
                    if(err)  result(err,null);
                    if(res)  console.log(res); result(null,res.insertId);  
                }) 
            } 
            else{  
               result('Email Already Exists',null)
            }  
            }  
       
    })
  
} 

Registration.LoginSend =  (LoginSend,result)=>{
     
    dbConn.query('select *  from registration where email=?',LoginSend.email,(err,res)=>{
        if(err){
               result("sorry",null);
        }   
      //  console.log(res); 
        if(res.length != 0){     
           // console.log(res);    
           if(res[0].password != ''){ 
              // checking Password
                const passwordHash =  bcrypt.compareSync(LoginSend.password, res[0].password); 
               // console.log(passwordHash);
               if(passwordHash){ 
                var token = jwt.sign({ foo: res[0].Rid }, 'MyBlog');
                //console.log(token); 
                const userdetails = {};
                userdetails.user = res[0]; 
                userdetails.token = token; 
                result(null,userdetails);   
               } else{    
                   result('Please enter correct password',null)
               }

           } 
          
           } else{      
               console.log('err');  
            result('Please Enter Correct Email',null)
         }  
      
   })
     //  console.log(LoginSend) 
}
module.exports = Registration;  