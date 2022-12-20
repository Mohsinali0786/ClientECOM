module.exports={
    STRING:{
        type:String
    },
    STRING_REQUIRED:{
        type:String,
        required:true,
    },
    BOOLEAN_DEFAULT: {
        type: Boolean,
        default: false
    },
    ARRAY_STRING:{
        type:Array,
    },
    CREATED_DATE: {
        type: Date,
        default: Date.now
    },
    NUMBER_REQUIRED: {
        type: Number,
        required: true,
    },
    NUMBER: {
        type: Number,
        default: 0
    },
    REF_OBJECT_ID: (ref) => {
        return {
            type: SchemaTypes.ObjectId,
            ref
        }
    },
}