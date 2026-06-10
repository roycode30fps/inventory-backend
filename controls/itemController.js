const item = require ('../models/itemmodel')
const mongoose =  require('mongoose')
//get all item
const getItems = async(req, res) => {
    const Items = await item.find({}).sort({createdAt: -1})

    res.status(200).json(Items)
}
//get item
    const getItem = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such Item'})
        }
        const Item = await item.findById(id)

        
        if(!Item){
            return res.status(404).json({error: 'No such Item'})
        }
        res.status(200).json(Item)
    }
//borrow item
const createitem = async(req, res) => {
     const{title, how, size} = req.body
//add new item
    try{
        const Item = await item.create({title, how, size})
        res.status(200).json(Item)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete item
const deleteItem = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such Item'})           
    }
    const Item = await item.findOneAndDelete({_id: id})


    if(!Item){
            return res.status(404).json({error: 'No such Item'})
    }
    res.status(200).json(Item)
}
//patch item

const updateItem = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such Item'})           
    }
    const Item = await item.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such Item'})
    }
    res.status(200).json(Item)
}

module.exports ={
    getItems,
    getItem,
    createitem,
    deleteItem,
    updateItem
}