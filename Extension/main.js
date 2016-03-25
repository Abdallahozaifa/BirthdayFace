var successURL = 'www.facebook.com/connect/login_success.html';

/**
 * Logins in to the users facebook
 */
var onFacebookLogin = function(){
  if (!localStorage.getItem('accessToken')) {
    chrome.tabs.query({}, function(tabs) { // get all tabs from every window
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url.indexOf(successURL) !== -1) {
          // below you get string like this: access_token=...&expires_in=...
          var params = tabs[i].url.split('#')[1];

          var accessToken = params.split('&')[0];
          accessToken = accessToken.split('=')[1];

          localStorage.setItem('accessToken', accessToken);
          chrome.tabs.remove(tabs[i].id);
        }
      }
    });
  }
}
console.log("Logged in!");
chrome.tabs.onUpdated.addListener(onFacebookLogin);

var redirect = "https://www.facebook.com/dialog/oauth?client_id=247875252213439&response_type=token&scope=user_friends&redirect_uri=http://www.facebook.com/connect/login_success.html";

console.log("Logged into facebook!");