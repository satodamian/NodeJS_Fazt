// Enviar un archivo grande y mandar en multiples partes 
const { writeFile } = require('fs/promises');

// const createbigFile = async()=>{
//     await writeFile('../data/bigFile.txt', 'Hello World'.repeat(10000))
//     // console.log('Archivo Creado')
// }

// createbigFile();

// Dividir y segmentar mi peso
// const {createReadStream} = require('fs');
// // UTF-8 -> Para ver en formato string y no en formato buffer
// const stream = createReadStream('../data/bigFile.txt', 'utf-8', {
//     // encoding: 'utf-8',
//     // high ... Ver documentacion de NodeJS
// })

// stream.on('data', (chunk)=>{
//     // Trozo de informacion: chunk
//     console.log(chunk)
// })

// stream.on('end', ()=>{
//     console.log('Terminamos de leer el archivo...')
// })

// stream.on('error', (err)=>{
//     console.log(err)
// })