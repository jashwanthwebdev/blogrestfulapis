const express = require('express');
const routes = express.Router();
const path = require('path'); 
const BlogController = require('../Controller/addBlogController'); 
const {checkRequest,adminMiddleware} = require('../commonmiddleware/checkRequestUser'); 
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"))
    },
    filename: function (req, file, cb) { 
      cb(null, Date.now()+ '-' +file.originalname);    
    } 
  })
  var upload = multer({ storage: storage })
  
 
routes.post('/addBlog',checkRequest,adminMiddleware,upload.single('image'),BlogController.addBlog)
routes.get('/findBlog/:Bid',BlogController.findBlogById);  
routes.post('/updateBlog/:Bid',upload.single('image'),BlogController.findBlogUpdate); 
routes.post('/deleteblog/:Bid',BlogController.findBlogDelete); 
routes.post('/viewBlog/:title/:Bid',BlogController.viewBlog); 
routes.post('/likeblog',BlogController.likeBlog); 
routes.post('/viewAllBlog',BlogController.viewAllBlog);  
 
module.exports = routes;  