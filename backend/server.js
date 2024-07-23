import express from 'express';
import authRoute from './routes/auth.route.js';
import movieRoute from './routes/movie.route.js';
import searchRoute from './routes/search.route.js';
import tvRoute from './routes/tv.route.js';
import { protectRoute } from './middleware/protectRoute.js'
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/movies", protectRoute , movieRoute);
app.use("/api/tv", protectRoute , tvRoute);
app.use("/api/search", protectRoute , searchRoute);

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
    connectMongoDB();
});
