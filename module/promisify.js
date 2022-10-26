const { readFile } = require("fs/promises");
//? PROMISIFY: OPTIMIZACION DE PROMESAS

// const {promisify} = require('util');

// const readFilePromises = promisify(readFile)

// const getText = (pathFile) => {
//   return new Promise((resolve, reject) => {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// !Promises
// getText('../data/second.txt')
//         .then((data)=>console.log(data))
//         .catch((err)=>console.log(err))

// !Async - Await 
const read = async () => {
  try {
      const result = await readFile("../data/first.txt");
      const result2 = await readFile("../data/second.txt");
      console.log(result);
      console.log(result2);
      throw new Error ('Esto es un error inesperado')
    const result3 = await getText("../data/third.txt");
    console.log(result3);
  } catch (error) {
        console.log(error)
  }
};

read();
