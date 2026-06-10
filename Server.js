require("dotenv").config();
const dns = require('dns')
const express = require('express')
const cors = require('cors')
const itemRoutes = require('./Routes/Items')
const mongoose = require('mongoose')

dns.setServers(['8.8.8.8', '1.1.1.1'])
const client = express()

client.use(cors())
client.use(express.json())

client.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

client.use('/api/items', itemRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.log(error))

module.exports = client