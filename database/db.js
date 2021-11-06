const mongoose = require("mongoose")

const connection = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connection is successfuly"))
        .catch((err) => console.log(err))
}

module.exports = connection