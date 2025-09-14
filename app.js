import express from 'express';
import { PORT } from './config/config.js';
import connectDB from './database/mongodb.js';

const app = express();
app.use(express.json());

// A simple test route to make sure our server is working
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});

export default app;