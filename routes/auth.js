var graph = require('fbgraph');
  
var fb_conf = {
    client_id:      '429251933799377'
  , client_secret:  'f3c648e68556196a2e99282cd3dd6c53'
  , scope:          'email, user_about_me, user_birthday, user_location, publish_stream,user_groups'
  , redirect_uri:   'http://localhost:3000/auth/facebook'
};



exports.facebook = 





function(req, res) {

  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) { 
    var authUrl = graph.getOauthUrl({
        "client_id":     fb_conf.client_id
      , "redirect_uri":  fb_conf.redirect_uri
      , "scope" :         fb_conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
    return;
  }
  // code is set 
  // we'll send that and get the access token
   graph.authorize({
      "client_id":      fb_conf.client_id
    , "redirect_uri":   fb_conf.redirect_uri
    , "client_secret":  fb_conf.client_secret
    , "code":           req.query.code
  }, function (err, facebookRes) {
    console.log(facebookRes);
    req.session.facebook_res = facebookRes;
     req.session.auth = 'true';
     res.redirect('/');
      //var accessToken = facebookRes.access_token;
     // req.session = {access_token : accessToken , auth : 'true'};
    })}

