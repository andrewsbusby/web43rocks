require('dotenv');

const express = require('express');
const server = express()

console.log(process.env.USERDOMAIN);

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})