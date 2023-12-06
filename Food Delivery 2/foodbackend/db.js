const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(`mongodb+srv://kfauziya93:Asdfghjkl786@cluster0.vafqwul.mongodb.net/?retryWrites=true&w=majority`)
}