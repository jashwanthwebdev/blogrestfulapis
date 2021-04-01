const express = require('express');
const routes  = express.Router();
const conReg  = require('../Controller/registerController'); 

routes.post('/registration',conReg.Registration); 

routes.post('/login',conReg.Login);   
  
 
module.exports = routes;   
 

    