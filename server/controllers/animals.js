const mongoose = require("mongoose");
const Animal = mongoose.model("Animal");

module.exports = {
    index: (req, res)=>{
        console.log("in index method");
        
        Animal.find({})
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        console.log("in create method");
        
        Animal.create(req.body)
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        console.log("in show method");
        
        Animal.findById(req.params.id)
        .then(animal => res.json(animal))
        .catch(err => res.send(err))
    }
}