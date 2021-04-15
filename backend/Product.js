const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const productSchema = new mongoose.Schema({

    userId: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        require: true
    }
})

mongoose.model("Product", productSchema)