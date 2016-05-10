/****************************************
 *     BIRTHDAY FACE MODULE             *
 ****************************************/
(function() {
    
    /* Imports */
    var FB = require('fb');
    
    FB.setAccessToken('access_token');
 
    var body = 'My first post using facebook-node-sdk';
    FB.api('me/feed', 'post', { message: body }, function (res) {
      if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      console.log('Post Id: ' + res.id);
    });
    
}).call(this);