const  mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    how:{
        type: Number,
        required:true
    },
    size:{
        type: String,
        required:true
    } 
}, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema)

