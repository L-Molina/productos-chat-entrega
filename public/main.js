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
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.email}${elem.fecha}:</strong>
            <em>${elem.mensaje}<em/> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
 
//addMessage
function addMessage(e) {
    const mensaje = {
        email: document.getElementById('email').value,
        fecha: (new Date).toLocaleDateString(),
        mensaje: document.getElementById('mensaje').value
    }; 
    socket.emit('new-message', mensaje);
    document.getElementById('email').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('mensaje').value = '';
    return false;
};

socket.on('messages', function(data) { renderMessages(data); });
socket.on('productos', data => { 
    fetch('products.json')
        .then(response => response.json())
        .then(renderProducts(data))
        .catch(error => console.log(error))
});