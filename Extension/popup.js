console.log("popup.js loaded!");

var chromeTabs;
chrome.runtime.onMessage.addListener(function(req, res, sendResponse) {
    chromeTabs = req.message;
});

/**
 * Allows the links to work in the popup.html
 */
$(document).ready(function(){
    $("#fbLogin").click(function(){
        chrome.tabs.create({url: $(this).attr("href")});
    });   
});