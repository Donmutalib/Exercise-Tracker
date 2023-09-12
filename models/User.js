const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    log: [{
        _id: false,
        description: { type: String, required: true },
        duration: { type: Number, required: true },
        date: String
    }]
});

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     duration: Number,
//     date: String,
//     // date: {
//     //   type: Date,
//     //   default: new Date()
//     // },
//     count: Number,
//     log: [Object],
// })


const User = mongoose.model('User', userSchema)
module.exports = User


// log: [{
//     _id: false,
//     description: { type: String, required: true },
//     duration: { type: Number, required: true },
//     date: String
// }]