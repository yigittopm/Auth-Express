const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
const database = require("./database/db")
const authRouter = require("./routes/auth")
const DashboardRouter = require("./routes/dashboard")

// Config
dotenv.config()

// Connect to db
database()

// Middlewares
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/dashboard", DashboardRouter)

// Listen to port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server is running.!"))