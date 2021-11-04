const router = require("express").Router()
const verify = require("../auth/verifyToken")

router.get("/", verify,  (req,res) => {
    res.send({
        success: true,
        user: req.user
    })
})

module.exports = router