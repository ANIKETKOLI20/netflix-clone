import express from 'express'
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectMongoDB } from './db/connectMongoDB.js'

dotenv.config()

const app = express()

app.use(express.json()) // will allow us to parse req.body
app.use(express.urlencoded({ extended : true }))

app.use("/api/auth" , authRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`)
    connectMongoDB()
})