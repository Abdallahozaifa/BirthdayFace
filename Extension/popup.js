console.log("popup.js loaded!");
/**
 * Allows the links to work 
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log("entered listener!");
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

chrome.runtime.onMessage.addListener(function(req, res, sendResponse) {
    console.log(req.message);
});
