require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {port} = process.env||8081

app.use(bodyParser)
app.listen(port, (err) => {
    if(err) throw err
    console.log(`Server running at http://localhost:${port}`)
})
