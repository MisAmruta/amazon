const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Product = mongoose.model('Product')
const requireLogin = require('./requireLogin')

router.post('/setProducts', (req, res) => {
    const { userId, title, image, price, rating } = req.body

    const product = new Product({
        userId, title, image, price, rating
    })

    product.save().then(savedProduct => {
        if (savedProduct) {
            res.json({ savedProduct, message: "Product added successfully" })
        }
        else {
            res.json({ error: "Failed to add product" })
        }
    })

    // Product.findByIdAndUpdate(_id, {
    //     $push: { sell: req.body }
    // }, {
    //     new: true
    // }).exec((err, result) => {
    //     if (result) {
    //         res.json({ result })
    //     }
    //     else {
    //         res.json({ err })
    //     }
    // })

})

router.get('/getProducts', (req, res) => {
    Product.find()
        .then(result => {
            res.json({ result })
        })
})

module.exports = router