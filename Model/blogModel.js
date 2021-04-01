const dbConn = require('../DbConnection/dbmysql');
const AddBlog = function(blog){
    this.title = blog.title;
    this.image = blog.image;
    this.content = blog.content;
    this.createdAt = new Date();
    this.updatedAt = new Date(); 
    this.count   = blog.count ? blog.count : 0; 
} 
  
AddBlog.Create = (addblog,result)=>{
     dbConn.query('Insert into blog set ?',addblog,(err,res)=>{  
          if(err) result(err,null); 
          if(res) result(null,res);  
     })
} 

AddBlog.findByBlog = (Bid,result)=>{
    var sql = `select * from blog where Bid=${Bid}`;
    dbConn.query(sql,(err,res)=>{
        if(err) result(err,null); 
        if(res) console.log(res); result(null,res); 
    })
}

AddBlog.updateByBlog = (blog,Bid,result)=>{
   // var blog1 = JSON.parse(blog); 
   var keys = Object.keys(blog);
   var values = Object.values(blog); 
  // console.log(keys.join('='+'?,').concat('=?')); 
   var re = keys.map((el,i)=>{
       return el.concat("="+"'"+values[i]+"'");  
   })
   var blog1 = re.join(' , ');    
    var sql = `update blog set ${blog1} where Bid=${Bid}`; 
    console.log(sql); 
    dbConn.query(sql,(err,res)=>{
        if(err) result(err,null);   
        if(res) result(null,res);   
    })
}

AddBlog.DeleteBlogById = (Bid,result)=>{
    var sql = `Delete from blog where Bid=${Bid} `; 
    dbConn.query(sql,(err,res)=>{
        if(err) result(err,null);
        if(res) result(null,res);  
    })
}

AddBlog.viewBlog = (Bid,result)=>{  
    var sql = `select * from blog where Bid=${Bid}`;
    dbConn.query(sql,(err,res)=>{  
        if(err) result(err,null);
        if(res) var c = res[0].count; console.log(res[0].count);    
        var sql1 = `update blog set count=${c+1} where Bid=${Bid} `;
        dbConn.query(sql1,(err,res)=>{
            if(err) result(err,null);
            if(res) result(null,res);    
        }) 
    }) 
}

AddBlog.likeBlog = (details,result)=>{

    var sql = `insert into bloglikes set ?`
    dbConn.query(sql,details,(err,res)=>{
           if(err) result(err,null);
           if(res) result(null,res); 
    })
}

AddBlog.viewAll = (result)=>{
    var sql = `select * from blog`;
    dbConn.query(sql,(err,res)=>{
        if(err) result(err,null);
        if(res){
           // console.log(res); 
            var allData = res; 
            if(allData.length > 0){
                var sql1 = `select * from  bloglikes`;
                dbConn.query(sql1,(err,res)=>{
                    if(err) result(err,null);
                    if(res){ 
                        var likes = res;
                      //  console.log(likes); 
                      //  console.log(allData.length); 
                      var getResult = []; 
                      allData.map((el,i)=>{ 
                        // el.find(likes)  
                    //   let d1 =  likes.find((e,_)=>{
                    //       console.log(e.Bid+','+el.Bid);  
                    //     return e.Bid == el.Bid
                    //   } );     
                     // console.log(d1+'find');   

                        likes.map((li,id)=>{
                           
                            if(el.Bid == li.Bid){ 
                               // console.log('its working');  
                                   var mobile = 9032771453; 
                                   if(mobile == li.mobile){
                                  //  console.log('Mobile find'); 
                                    getResult.push({...el,find:true}) 
                                   }else{ 
                                    getResult.push({...el,find:false});   
                                }
                                 
                            }else{ 
                                getResult.push({...el,find:false});   
                            }
                        })  
                        
                      }) 
                    //  console.log(getResult)
                      return result(null,getResult);   
                    } 
                }) 
            }    
            
        }
    })
}
  
module.exports = AddBlog; 