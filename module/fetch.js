const { default: fetch } = require("node-fetch");

const loadData = async () =>{
    try {
        const resp = await fetch('https://jsonplacexholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => console.log(data));
  
    } catch (error) {
        console.log(error);
    }
}

loadData();

