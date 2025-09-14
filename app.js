import express from 'express';
import { PORT } from './config/config.js';
import connectDB from './database/mongodb.js';

const app = express();


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});

export default app;