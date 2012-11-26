var graph = require('fbgraph')
    , mongoose = require('mongoose')
    , Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/my_database');

var UserSchema = new Schema({
    name: { fullname: String,firstname : String },
    id: String ,
    posts : {post : [ date = String ,text = String , pictureurl = String ,number = String] },
    localid :  Schema.ObjectId
});

var User = mongoose.model('User', UserSchema);


exports.index = function(req, res){
	
 graph.get("me/groups", function(err, resp) {
     console.log(resp.data);
     graph.get("me", function(err, respo) {
         var user = User.find({id : respo.id}, function(err,result){
           if (!result){
               var user = new User();
               user.name = {fullname : respo.name, firstname : respo.first_name};
               user.id = respo.id;
               user.save(function(err,result) {
                   console.log(result);
                  // var result_message = (err) ? err.toString() : 'User Successfully Created';
                 //  res.redirect('/');
               });
           }
         })
        // console.log(respo);
         res.render('index', {user:respo, groups :resp.data ,title: 'Wikilogia | Storm Publisher'});
     });

  });

};
