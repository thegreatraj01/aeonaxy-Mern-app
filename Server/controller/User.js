import User from '../Schemas/User.js';
import { uploadToCloudinary } from '../Utils/Cloudinary.js';
import sendEmail from '../Utils/SendEmail.js';
import { generateToken, verifyToken } from '../Utils/GenrateToken.js';

const registerUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { name, username, password, email, agreeTerms } = req.body;

        // Check if required fields are empty
        if (!name || !username || !password || !email || agreeTerms === undefined) {
            throw new Error('All required fields must be filled');
        }

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const existingUser2 = await User.findOne({ username: username });
        if (existingUser2) {
            return res.status(400).json({ message: 'Username already taken try something else ' });
        }

        // Password validation regex pattern
        const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{6,}$/;
        if (!passwordPattern.test(password)) {
            throw new Error('Password must contain at least one number, one uppercase letter, and one special character');
        }

        // Create a new user instance using the User model
        const newUser = new User({
            name,
            username,
            password,
            email,
            terms: agreeTerms,
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        savedUser.password = null;

        // Return success response
        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        // Handle errors
        console.error('Error registering user:', error);
        res.status(400).json({ message: error.message || 'Internal server error' });
    }
};


// controller for update user profile 
const updateProfile = async (req, res) => {
    try {
        // Destructure required fields from request body
        const { userId, location, profileType } = req.body;
        const profilePath = req.file.path;

        // Check if any required field is missing
        if (!userId || !location || !profileType || !profilePath) {
            return res.status(400).send('All fields are required');
        }

        // Upload profile image to Cloudinary
        const profileUrl = await uploadToCloudinary(profilePath);

        // Find user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }
        const token = generateToken(user._id);
        // console.log('Token generated', token , user.email);

        sendEmail(user.email, token)

        // Update user profile
        user.profileType = profileType;
        user.profilePic = profileUrl;
        user.location = location;


        // Save the updated user
        await user.save();
        // Send a success response
        res.status(200).send('Profile updated successfully');

    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }

};

const reSendEmail = async (req, res) => {
    try {
        const { userId } = req.body;
        console.log(req.body);
        if(!userId)return res.status(404).send('Send userId');

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const token = generateToken(user._id);
        sendEmail(user.email, token);
        res.status(200).send("Email sent");
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error: ' + error.message);
    }
};

const verifyemail = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) return res.status(401).send('Token is required');

        const userId = verifyToken(token); 
        if (userId === null) return res.status(401).send('Invalid token Please try again');

        // Assuming you're using Mongoose for MongoDB interaction
        await User.findOneAndUpdate({ _id: userId.userId }, { emailVerified: true });
        res.status(200).send('Email verified');
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred while verifying email');
    }
}


export { registerUser, updateProfile, verifyemail, reSendEmail };
