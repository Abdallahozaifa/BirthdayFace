/****************************************
 *     BIRTHDAY FACE SERVER             *
 ****************************************/

/* global  */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

////////////
/* CONFIG */
////////////

app.set('port', (process.env.PORT || 8080));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json 
app.use(bodyParser.json());

//////////////
/* GET/POST */
//////////////

//////////////
/* WEBSITE */
//////////////
app.use('/', express.static('www'));


////////////
/* LISTEN */
////////////

app.listen(app.get('port'), function() {
    console.log('BIRTHDAY FACE is running on port', app.get('port'));
    console.log("https://birthday-face-abdallahozaifa.c9users.io/");
});