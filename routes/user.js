var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/my_database');

var UserSchema = new Schema({
    name: { fullname: String,firstname : String },
    id: String ,
    posts : {items : [ {date : String ,text : String , pictureurl : String ,number : String}],number : String},
    localid :  Schema.ObjectId
});

var User = mongoose.model('User', UserSchema);

exports.creat=function(user,callback){
	       var new_user = new User();
               new_user.name = {fullname : user.name, firstname : user.first_name};
               new_user.id = user.id;
               new_user.posts.number = 0;
               new_user.save(function(err,result) {
                   console.log(result);
                   return callback(result);
                  // var result_message = (err) ? err.toString() : 'User Successfully Created';
                 //  res.redirect('/');
               } );

}

exports.find = function(object,parms,callback){
	 User.find({parms : object.parms }, function(err,result){
         return callback(result);
	});


}

exports.add= function(user,post,callback){
        var new_callback;
	User.find({id : user.id},function(err,result){
        result.posts.number++;
	var new_post = {date : new Date().toString() ,text : post.text , pictureurl : post.url ,number : result.posts.number};
	result.posts = result.posts.items + new_post;
        return callback(new_post);
	});

}

/*exports.fetch = function(user,callback){
        new_callback={};
	User.find({id : user.id},function(err,result){
	 for(int i=result.posts.items.length;i)	
         new_callback[i] = result.ps
	}
}*/



