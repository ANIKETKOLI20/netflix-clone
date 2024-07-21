import express from 'express'
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectMongoDB } from './db/connectMongoDB.js'

dotenv.config()

const app = express()

app.get("/" , ( req , res ) => {
    res.send("Hello World !")
})

app.use("/api/auth" , authRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`)
    connectMongoDB()
})