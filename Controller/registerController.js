const bcrypt = require('bcrypt'); 
const Registration = require('../Model/registrationModel'); 
exports.Registration = async (req,res)=>{
   // res.json({message : 'Registration working....'})
   console.log(req.body);  
   let register = {...req.body}; 
   register.password = await bcrypt.hashSync(req.body.password, 10);
  // const req  
   const RegistrationCreate = new Registration(register);
   Registration.create(RegistrationCreate,(err,success)=>{   
       if(err) return res.status(400).json({err});
       if(success) return res.status(201).json({message: "Registration success",data:success})
   }) 
} 

exports.Login = (req,res)=>{
    const RegistrationLogin = new Registration(req.body);  
  // const login ={...req.body};    
     Registration.LoginSend(RegistrationLogin,(err,success)=>{    
         if(err)  res.status(400).json({err});     
         if(success)  res.status(200).json({message: "Login Sucess",token:success})
     })
} 