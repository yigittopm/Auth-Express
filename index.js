const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const dashboardRoute = require("./routes/dashboard")

// Config
dotenv.config()

const PORT = process.env.PORT || 3000;

// Connect to db
mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connect to database.!")
})

// Middlewares
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/dashboard", dashboardRoute)

// Listen to port
app.listen(PORT, () => console.log("Server is running.!"))