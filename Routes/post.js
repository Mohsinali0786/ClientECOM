const express=require('express')
const routes=express.Router()
const {addItem}=require('../Controllers/postController')
routes.post('/add_items',addItem)
// routes.post('/login',loginUser)

module.exports = routes