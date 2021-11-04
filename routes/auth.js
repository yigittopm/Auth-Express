const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../auth/validation")

// REGISTER
router.post("/register", async (req, res) => {
    
    // Syntax error check
    const { error } = registerValidation(req.body)
    if(error) res.send(error.details[0].message).status(400)

    // Email check
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) res.send("Email already exists").status(400)

    // Hashing Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })

    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err) {
        res.send(err).status(400)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    
    // Syntax check
    const { error } = loginValidation(req.body)
    if(error) res.send(error.details[0].message).status(400)

    // User check
    const user = await User.findOne({email: req.body.email})
    if(!user) res.send("Email is not found").status(400)

    // Password check
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) res.send("Invalid password").status(400)

    // Create access token
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
    res.header("auth-token", token).send(token)
})

module.exports = router