const express = require("express")
const connectDB = require("./connectDB")
const authRouter = require("./routes/authRoute")
const adminRouter = require("./routes/adminRoute")

require("dotenv").config()

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
// Connect to MongoDB Database
connectDB()

app.use("/auth", authRouter)
app.use("/admin", adminRouter)

app.listen(port, () => console.log(`Server is running on port ${port}!`))
