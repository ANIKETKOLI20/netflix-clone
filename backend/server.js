import express from 'express';
import authRoute from './routes/auth.route.js';
import movieRoute from './routes/movie.route.js';
import tvRoute from './routes/tv.route.js';
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/movies", movieRoute);
app.use("/api/tv", tvRoute);

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
    connectMongoDB();
});
