const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()
const PORT = 3000

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}

app.get('/', (req,res) => {
    res.send('Hello, world!')
})

https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})