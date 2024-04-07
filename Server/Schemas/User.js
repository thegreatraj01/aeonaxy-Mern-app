import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    profilePic: {
        type: String,
        default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    terms: {
        type: Boolean,
        required: true
    },
    profileType: {
        type: String,
        enum: ['designer', 'employer', 'learner'],
        message: '`{VALUE}` is not supported'
    },
    emailVerified: {
        type: Boolean,
        default: false
    }
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model('User', userSchema);

export default User;
