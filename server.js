var http = require("http");

var PORT = 7000;

var PORT2 = 7500;

function handleRequests(request, response) {
    response.end(compliment())
};

function handleRequests2(request, response) {
    response.end("Your mother was a hampster, and your father smelt of elderberries!");
}

var server = http.createServer(handleRequests);
var server2 = http.createServer(handleRequests2);

server.listen(PORT, function() {
    console.log("You are extremely intelligent! : PORT = %s", PORT);
});

server2.listen(PORT2, function() {
    console.log("Your mother was a hampster, and your father smelt of elderberries! : PORT = %s", PORT2);
});


function compliment() {
    var compliments = ["You're very nice", "You are intelligent!", "I like your project work!"];
    var stuff =  compliments[Math.floor(Math.random() * compliments.length)];
    //var stuff = 'hello world';
    return stuff;
};