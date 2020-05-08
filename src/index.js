const app_port = process.env.PORT || 5000
var http = require('http'),
    fs = require('fs');


fs.readFile('./index1.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 5000)
    
});
