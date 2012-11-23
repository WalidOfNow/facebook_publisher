var graph = require('fbgraph')
exports.index = function(req, res){
	
 graph.get("me/groups", function(err, resp) {
     console.log(resp.data);
     graph.get("me", function(err, respo) {
         console.log(respo);
         res.render('index', {user:respo, groups :resp.data ,title: 'Wikitechie | Facebook_Publisher'});
     });

  });

};
