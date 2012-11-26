var graph = require('fbgraph')
   , utils = require('util');

exports.post= function(req,res){

    var wallPost = {
        message: req.body.text
    };
    
    console.log(req.body.upload)
    if (wallPost.message) {
        for (var i in req.body.checkbox) {
            graph.post(i+"/feed", wallPost, function (err, resp) {
                console.log(resp);
            })
        }
        if(req.body.me){
        graph.post("me/feed", wallPost, function (err, resp) {
            console.log(resp);
        })
        }
        res.redirect('/');
    } else req.redirect('/');

   
}
