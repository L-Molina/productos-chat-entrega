const express = require("express");
const app = express();
const fetch = require("node-fetch")
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//router
const router = require("./routes")

const chat = require("./controller/messages");
const items = require("./controller/productos");
const Contenedor = require("./controller/controller");

//plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//connection
io.on('connection', async function(socket) {
    console.log('Un cliente se ha conectado');
    socket.on('new-product',data => {
        try {
            Contenedor.addProduct(data);
            io.sockets.emit('products', products);
        } catch (err) {
            console.log(err);
        }
    });
});

io.on('connection', async function(socket) {
    const messages = await chat.showMessage();
    socket.emit('messages', messages);
    socket.on('new-message',data => {
        try {
            Contenedor.addMessage(data);
            io.sockets.emit('messages', messages);
        } catch(err) {
            console.log(err);
        }
    });
})

//levantar servidor
httpServer.listen(8080, () => console.log("Server listening on http://localhost:8080"));
