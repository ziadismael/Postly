import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must be less than 50 characters long"],
    },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Invalid email address"
        }
    },
    username: { 
        type: String, 
        required: [true, "Username is required"], 
        unique: true 
    },
    password: { 
        type: String, 
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
});

const User = mongoose.model('User', userSchema);

export default User;