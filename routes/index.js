var graph = require('fbgraph')
   ,users = require('./../routes/user')

exports.index = function(req, res){
	
 graph.get("me/groups", function(err, resp) {
     //console.log(resp.data);
     graph.get("me", function(err, respo) {
         users.find(respo,respo.id,function(result){
           console.log(result);
	if (result===[]){
               users.creat(respo,function(resu){
               console.log(resu);
               })
           }
         });
           res.render('index', {user:respo, groups :resp.data ,title: 'Wikilogia | Storm Publisher'}); 
         })
        // console.log(respo);
        
     });

 

};
