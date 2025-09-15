import express from 'express';
import { PORT } from './';
import connectDB from './database/mongodb.js';
import authRouter from './routes/auth.routes.js';
import postRouter from './routes/post.routes.js';

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("api/posts", postRouter);

// A simple test route to make sure our server is working
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});

export default app;