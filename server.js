const express = require("express");
const app = express();
const fetch = require("node-fetch")
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//router
const router = require("./routes")

const messages = [
    { email: "admin@chat.com", fecha: (new Date).toLocaleDateString(), mensaje: "Deja tu mensaje aquí!" }
];

//plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//connection
io.on('connection',function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);
    socket.on('disconnect', () => console.log("Un cliente se ha desconectado"))

    fetch('http://localhost:8080/list-products')
    .then(response => response.json())
    .then(data => {io.sockets.emit('productos', data)});

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

//levantar servidor
httpServer.listen(8080, () => console.log("Server listening on http://localhost:8080"));
