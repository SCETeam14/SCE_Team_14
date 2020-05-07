const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()
app.set('view engine','HTML')
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
})
app.listen(app_port)
console.log(`app is running. port: ${app_port}`)
console.log(`http://127.0.0.1:${app_port}/`)
