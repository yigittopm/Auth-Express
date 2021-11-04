const Joi = require("@hapi/joi")

// Register validation
function registerValidation(data) {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(255),
        email: Joi.string().required().min(8).max(255).email(),
        password: Joi.string().required().min(8).max(1024)
    })

    return schema.validate(data)
}

// Login validation
function loginValidation(data) {
    const schema = Joi.object({
        email: Joi.string().required().min(8).max(255).email(),
        password: Joi.string().required().min(8).max(1024)
    })

    return schema.validate(data)
}

module.exports = {
    registerValidation,
    loginValidation
}