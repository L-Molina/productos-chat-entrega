//socket
const socket = io.connect();

//renderProducts
function renderProducts(data) {
    const html = data.map((productos, index) => {
        return(`<tr>
            <td>${productos.name}</td>
            <td>${productos.price}</td>
            <td><img src="${productos.thumbnail}" class="productImage"></td>                  
        </tr>`)
    }).join(" ");
    document.getElementById('tbodyList').innerHTML = html;
}

//renderMessages
function renderMessages(data) {
    const html = data.map((mensaje, index) => {
        return(`<div>
            <strong>${mensaje.email} ${mensaje.fecha}</strong>
            <em>${mensaje.mensaje}<em/> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
    var elem = document.getElementById('messages');
    elem.scrollTop = elem.scrollHeight;
}


//addMessage
function addMessage(e) {
    const mensaje = {
        email: document.getElementById('email').value,
        fecha: (new Date).toLocaleDateString(),
        mensaje: document.getElementById('mensaje').value
    }; 
    document.getElementById('email').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('mensaje').value = '';
    socket.emit('new-message', mensaje);
    return false;
};

socket.on('messages', function(data) { renderMessages(data); });
socket.on('productos', function(data) { renderProducts(data); });