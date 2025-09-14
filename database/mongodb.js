import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config.js';

if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined in the environment variables .env');
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;