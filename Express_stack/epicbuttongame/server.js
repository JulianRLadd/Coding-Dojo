const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(80);
const io = require('socket.io')(server);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get("/", (req, res) => {
    var counter = -1;
    context = {
        count:counter
    }
    res.render('index',context);
})
io.on('connection', function (socket) { //2
    var counts = 0;
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  io.emit('new_count', counts); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
  socket.on('update_count', function () { //4
    console.log(counts)
    counts++;
    io.emit('count_update', counts); //3
    
    //     console.log("broadcast counter SERVER"+count.count)
    // })
    });
  socket.on('reset_count', function () { //4
    console.log(counts)
    counts = 0;
    io.emit('count_reset', counts);
    });
});
