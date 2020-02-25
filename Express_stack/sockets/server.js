const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get("/", (req, res) => {
    res.render('index');
})
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
  socket.on('posting_form', function (event) { //4
//     console.log("test")
//     console.log(event); //5
    var info = [];
    for(i in event){
        info.push(event[i].value)
        // console.log({event[i].value: event[i].value})
    }
    console.log(info)
    var randNum = Math.round(Math.random() * (1001 - 1) + 1);
    socket.emit('show_message', info, randNum); //6
    });
});
