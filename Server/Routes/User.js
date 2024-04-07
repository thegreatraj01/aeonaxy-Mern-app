import express from 'express';
import { registerUser, updateProfile,verifyemail } from '../controller/User.js';
import { upload } from '../Middleware/Multer.middleware.js';


const router = express.Router();

router.post('/register', registerUser);
router.put('/updateprofile', upload.single('profilePic'), updateProfile);
router.get('/verifyemail', verifyemail);


export default router;
