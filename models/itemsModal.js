const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT ,CREATED_DATE,NUMBER,REF_OBJECT_ID} = require('./schematypes')

const itemSchema=moongoose.Schema({
    item_name:STRING_REQUIRED,
    price:STRING_REQUIRED,
    color:STRING,
    image:STRING,
    stock:NUMBER,
    isDeleted: BOOLEAN_DEFAULT,
    createdBt:CREATED_DATE,
    userid:REF_OBJECT_ID,
})

let User=moongoose.model("Cart-Items",itemSchema);
module.exports=User