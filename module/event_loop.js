const http = require('http');

http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write('Bienvenido al Servidor')
        return res.end();
    } 
    if(req.url === "/about"){

        // Codigo Bloqueante
        // for (let i = 0; i < 10; i++) {
        //     console.log(Math.random()*i)
            
        // }
        return res.end('About PAge');
    } 

    res.end('$404 Not found')
    
}).listen(3000);

console.log('Servidor en el puerto 3000')