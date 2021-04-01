const AddBlog = require('../Model/blogModel'); 
exports.addBlog = (req,res)=>{
    console.log(req.file.filename);   
  //  console.log('Blog working....')
  const blog = {...req.body}; 
  blog.image = req.file.filename;
 const AddingBlog = new AddBlog(blog);
 AddBlog.Create(AddingBlog,(err,data)=>{
     if(err)  res.status(400).send({err});
     if(data)  res.status(201).send({message:'Blog Added Successfully',data:data})
 })
}   

exports.findBlogById = (req,res)=>{ 
    const Bid = req.params.Bid;  
  //  console.log(Bid);  
  //  const AddingBlog = new AddBlog();
  AddBlog.findByBlog(Bid,(err,data)=>{
      if(err)  res.status(400).send({err});  
      if(data)  res.status(200).send(data)
  })
}

exports.findBlogUpdate = (req,res)=>{
    const blog = {...req.body}; 
    blog.image = req.file.filename;
    const AddingBlog = new AddBlog(blog);
    AddBlog.updateByBlog(blog,req.params.Bid,(err,data)=>{
        if(err)  res.status(400).send({err})
        if(res)  res.status(200).send({message:"Updated Successfully", data})
    })
} 
 
exports.findBlogDelete = (req,res)=>{  
      const Bid = req.params.Bid; 
      AddBlog.DeleteBlogById(Bid,(err,data)=>{
          if(err) res.status(400).send({err}); 
          if(data) res.status(200).send({message:"Blog Deleted Successfully"}); 
      })

}

exports.viewBlog = (req,res)=>{
    const Bid = req.params.Bid;  
    AddBlog.viewBlog(Bid,(err,data)=>{
        if(err) res.status(400).send({err});
        if(data) res.status(400).send({message:'Thanks for Viewing...'})
    }) 
}

exports.likeBlog = (req,res)=>{
    const details ={};
    details.Bid = req.body.Bid;    
    details.mobile = req.body.mobile; 
    AddBlog.likeBlog(details,(err,data)=>{    
        if(err) res.status(400).send({err});
        if(data) res.status(200).send({message:'Thanks for likeing....',data:data})
    })
}

exports.viewAllBlog = (req,res)=>{
    AddBlog.viewAll((err,data)=>{
        if(err) res.status(400).send({err});
        if(data) res.status(200).send({data}); 
    })
}
 