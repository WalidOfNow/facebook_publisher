var graph = require('fbgraph')
   , utils = require('util');

exports.post= function(req,res){
    var wallPost = {
        message: req.body.text
    };
    if (wallPost.message) {
        graph.post("me/feed", wallPost, function (err, res) {
            console.log(res);
        });
    } else return;
}