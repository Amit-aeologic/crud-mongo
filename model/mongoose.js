const mongoose = require('mongoose')
require('dotenv').config()

const connectionUrl = process.env.MONGO_DB_URL

mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

module.exports = mongoose