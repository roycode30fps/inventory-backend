const express = require ('express')
const router = express.Router()
const {
    getItems,
    getItem,
    createitem,
    deleteItem,
    updateItem
} = require('../controls/itemController')
router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', createitem)

router.delete('/:id', deleteItem)

router.patch('/:id', updateItem)

module.exports = router