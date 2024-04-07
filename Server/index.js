import express from 'express';
import dotenv from 'dotenv';
import connect from './Db/Mobgodb.connection.js'; // Assuming this file handles MongoDB connection
import userRouter from './Routes/User.js'; // Assuming this file contains user-related routes
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

// Middleware
app.use(express.json());
app.use(userRouter); // Using userRouter as middleware


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

async function makeApiCall() {
    try {
        const response = await fetch("https://aeonaxy-mern-app.onrender.com/");
        if (response.ok) {
            console.log("API call successful");
        } else {
            throw new Error(`API call failed with status ${response.status}`);
        }
    } catch (error) {
        console.error("Error making API call:", error.message);
    }
}

const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
setInterval(makeApiCall, interval);

// Start the server
app.listen(PORT, async () => {
    connect(); // Assuming this function establishes MongoDB connection
    console.log(`Server is running on port ${PORT}`);
});

export default app;
