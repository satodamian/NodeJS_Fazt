const http = require('http');
// !Modelo Cliente-Servidor
// 1. Creamos un servidor
http.createServer((req, res)=>{

    // 2. Request
    // console.log(req.url);

    if(req.url === '/'){
        res.write('Bienvenido al servidor')
        return res.end()
    }
    if(req.url === '/about'){
        // Me muestra en pantalla 
        res.write('Bienvenido a ABout')
        return res.end();
    }

    // res.write('Not Found');
    res.write(`
        <h1>Not found</h1>
        <p>Pagina no encontrado</p>
        <a href="http://localhost:3000/">Volver a la pagina principal</a>`);
    res.end()
}).listen(3000);


console.log('Servidor escuchando en el puerto 3000');

