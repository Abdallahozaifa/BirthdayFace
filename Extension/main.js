console.log("main.js loaded!");
var successURL = 'www.facebook.com/connect/login_success.html';

/**
 * Detects when the user is logged in
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
  }else{
    console.log("Please Log in!");
  }
};

var redirectURL = "https://www.facebook.com/dialog/oauth?client_id=247875252213439&response_type=token&scope=user_friends&redirect_uri=http://www.facebook.com/connect/login_success.html";


var openTabs = []; // array with all open tabs
/**
 * Gets all the tabs in the browser
 */
chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab){
    // if the tab is fully loaded
    if(changeInfo.status == 'complete'){ 
        chrome.tabs.getAllInWindow(null, function(tabs){
            for (var i = 0; i < tabs.length; i++) {
                openTabs.push(tabs[i]);                  
            }
        });
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: chrome.tabs}, function(response) {
            
            });
        });
        // onFacebookLogin();
    }
});




