import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (filepath) => {
    try {
        if (!filepath) return null;
        // upload file to cloudinary storage 
        const response = await cloudinary.uploader.upload(filepath, { resource_type: 'auto' });
        // console.log('file uploaded to cloudinary storage', { 'response': response });
        fs.unlinkSync(filepath);
        return response.url;
    } catch (error) {
        console.log(error);
        fs.unlinkSync(filepath);
    }
}

export { uploadToCloudinary };