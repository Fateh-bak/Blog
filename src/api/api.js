const axios = require("axios");





const api = axios.create({
  baseURL: "http://localhost:3001/",
});




async function getPosts() {
  const res = await api.get("/");
  const data = res.data;
  return data;
}


async function sendCredentials(name,email,password){

  const body = {
    name: name,
    email: email,
    password: password,
  };
  const data = JSON.stringify(body)
  const url = "/sendCredentials"
  let headers= { "Content-Type": "application/json", "Access-Control-Allow-Origin":"*" } 
    const res = await api.post(url,data,{headers})
    console.log(res)

}
module.exports = { getPosts: getPosts , sendCredentials:sendCredentials};
