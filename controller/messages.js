const fs = require('fs')

class Message {
  constructor (file){
    this.file = file;
  }
  async saveFile(message){
    try {
        const data = await fs.promises.readFile(this.file);
        const array = JSON.parse(data);
        message.fecha = (new Date).toLocaleDateString();
        console.log(message);
        array.push(message);
        await fs.promises.writeFile(this.file, JSON.stringify(array, null,2));
    } catch (err) {
        console.log('error', err);
    }
  }
}
let messages = new Message('./public/messages.json');

const addMessage = (message) => {
  const msg = {
    email: message.email,
    fecha: message.fecha,
    mensaje: message.mensaje
  }
  messages.saveFile(msg)
}

module.exports = { addMessage }