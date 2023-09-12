const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log('Connected to the DB'))
}


module.exports = connectDB