import express from 'express';
import { PORT } from './config/config.js';

const app = express();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;