// Crear mis propios eventos

const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// Emitir un event0 / enviar un dato (Son para crear app mas avanzadas)
// !Esta escuchando sin necesidad de un click
customEmitter.on('x', (data, second_data)=>{
    console.log('received')
    console.log(data, second_data)
})

customEmitter.emit('x', 'Hola World', 'Congratulations')
customEmitter.emit('x', true, 123);
customEmitter.emit('x', 'Sat0', {name: 'Santiago'});
