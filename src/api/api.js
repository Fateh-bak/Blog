const axios = require("axios")

const api = axios.create({
    baseURL:"http://localhost:3001/"
})

async function getPosts(){
    const res = await api.get('/')
    const data = JSON.parse(res.data)
    return data
}

module.exports = {getPosts:getPosts}

