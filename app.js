
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , auth = require('./routes/auth')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
 

 
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session());
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
/*var sess = function(req,res){
req.session = {id : ''};
}
app.use(sess);*/
//app.get('/',  function(req,res,next){
//if(req.id){next()}else{res.redirect('/auth/facebook')}},routes.index); 

app.get('/auth/facebook', auth.facebook);

 

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
