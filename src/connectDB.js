const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.DATABASE_URL

const connectDB = async () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  const con = mongoose.connection

  con.on("open", () => {
    console.log("Database Connected...")
  })
}

module.exports = connectDB
