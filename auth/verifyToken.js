const jwt = require("jsonwebtoken")

module.exports = function (req,res, next) {
    const token = req.header("auth-token")
    if(!token) res.send("Access denied").status(401) 

    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verified
        next()
    }catch(err) {
        res.send("Invalid token.").status(400)
    }
}