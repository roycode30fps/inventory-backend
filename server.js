require("dotenv").config();
const dns = require('dns')
const express = require('express')
const cors = require('cors')
const itemRoutes = require('./Routes/Items')
const mongoose = require('mongoose')

dns.setServers(['8.8.8.8', '1.1.1.1'])
const client = express()

client.use(cors({
    origin: 'https://inventory-frontend-ten-neon.vercel.app'
}))
client.use(express.json())

client.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

client.use('/api/items', itemRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        client.listen(process.env.PORT || 4000, () => {
            console.log('Connected db & Listening on port', process.env.PORT || 4000)
        })
    })
    .catch((error) => {
        console.log(error)
    })