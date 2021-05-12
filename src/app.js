const express = require("express")
const connectDB = require("./connectDB")
const signupRouter = require("./routes/signup")
const adminRouter = require("./routes/admin")

require("dotenv").config()

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
// Connect to MongoDB Database
connectDB()

app.use("/signup", signupRouter)
app.use("/admin", adminRouter)

app.listen(port, () => console.log(`Server is running on port ${port}!`))
