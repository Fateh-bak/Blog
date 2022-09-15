const axios = require("axios");
const fetch = require("node-fetch")

const data = {
    name: "fateh",
    email: "fat@gmail.com",
    password: "fat",
  };
 let datatosend = JSON.stringify(data)
const api = axios.create({
  baseURL: "http://localhost:3001/",
});

async function getPosts() {
  const res = await api.get("/");
  const data = res.data;
  return data;
}

function sendData(){
    fetch("http://localhost:3001/", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify(data),
         
        // Adding headers to the request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    }).then(res=>JSON.parse(res)).then(j=>console.log(j))

}
sendData()
module.exports = { getPosts: getPosts , sendData:sendData};
