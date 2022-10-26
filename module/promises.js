const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// !Promises
// getText('../data/second.txt')
//         .then((data)=>console.log(data))
//         .catch((err)=>console.log(err))

// !Async - Await 
const read = async () => {
  try {
      const result = await getText("../data/first.txt");
      const result2 = await getText("../data/second.txt");
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
