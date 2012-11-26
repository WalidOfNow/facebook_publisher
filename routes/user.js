/*
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/my_database');

var UserSchema = new Schema({
    name: { fullname: String,firstname : String, index: true },
    id: Int ,
    localid :  Schema.ObjectId
});

var User = mongoose.model('User', UserSchema);


exports.new_resource = function(req,res) {
    var title= 'New Article'
    res.render('articles/new', {
        title : 'New Article'
    })

}
*/
exports.show = function(req, res){
  res.send("respond with a resource");
};
