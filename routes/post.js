var graph = require('fbgraph')
   , utils = require('util');

exports.post= function(req,res){
    var wallPost = {
        message: req.body.text
    };
 //  var  i=0;
   // var groups= {};
    /*req.body.checkbox.forEach(function(item){
      //  if (item.checked = true) {
            console.log(item[i]);
      //  }
    })*/
    for (var i in req.body.checkbox) {
        console.log(i);
    }


    if (wallPost.message) {
        graph.post("me/feed", wallPost, function (err, res) {
            console.log(res);
        });
    } else return;
}