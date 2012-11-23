
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , auth = require('./routes/auth')
  , login = require('./routes/login')
  ,post = require('./routes/post')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
 

 
var app = express();
var accessChecker= function(req,res,next){
						if (req.session.facebook_res && req.session.auth){
							next();	}
						else{
							res.redirect('/login');
									}
					};
var accessChecker_1= function(req,res,next){
    if (req.session.facebook_res && req.session.auth){
        res.redirect('/');	}
    else{
        next();
    }
};
app.configure(function(){
  app.set('port', process.env.PORT || 3000); 
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session( {secret : "my secret"}));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public'))); 
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/auth/facebook', auth.facebook);
app.get('/',accessChecker, routes.index);
app.get('/login',accessChecker_1, login.login);
app.post('/post',post.post);
app.get('/logout',function(req,res){
req.session.destroy();
res.redirect('/');
})


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
