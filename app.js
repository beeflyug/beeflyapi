require('dotenv').config()
const express = require('express')
const sequelize = require('./database/db')
const authRoutes = require('./routes/auth.routes')

const app = express()
const bodyParser = require('body-parser')
const {port} = process.env||8081

app.use(bodyParser.json())
app.use('/auth', authRoutes)

sequelize.sync()
         .then(() => {
             app.listen(port, (err) => {
               if(err) throw err
               console.log(`Server running at http://localhost:${port}`)
            })
         })
         .catch(error => {
             console.error(error)
         })
