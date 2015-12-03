var express = require('express');

var app = express();

var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/jedi/:firstname/:lastname", function(req, res) {
    // get first and last name from request params 
    var personFirstName = req.params.firstname;
    var personLastName = req.params.lastname;
    
    // set the first letter of each name to an uppercase letter
    // get the first 2 letters of the first name and first 3 letters of the last name
    var jediLastName = personFirstName[0].toUpperCase() + personFirstName.slice(1, 2);
    var jediFirstName = personLastName[0].toUpperCase() + personLastName.slice(1, 3);
    
    var greetings = [
        "There is good in you, ",
        "The Force is strong with ",
        "You're my only hope, ",
        "May the Force be with you, ",
        "Obi-Wan has taught you well, "
    ];
    
    // get a random number between 0 and 4
    var randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    
    // select a random greeting
    var randomGreeting = greetings[randomNumber];
    
    // put greeting together
    var jediGreeting = randomGreeting + "<span class='blue'>" + jediFirstName + jediLastName + "</span>.";
    
    // send the greeting in the response
    res.send({"greeting": jediGreeting});
});

app.listen(8080);