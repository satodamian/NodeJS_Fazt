const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res)=>{
    const fileStream = createReadStream('../data/bigFile.txt',{
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk)=>{
        // Te voy a enviar un dato a otra funcion
        fileStream.pipe(res)
    })

    fileStream.on('error', (err)=>{
        console.log(err)
    })
})

server.listen((3000), ()=>{
    console.log(`server on ${3000}`)
})