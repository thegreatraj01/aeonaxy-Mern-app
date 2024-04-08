// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './temp_upload/')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
//     }
// })

// export const upload = multer({ storage: storage });

import multer from 'multer';
import fs from 'fs';

const uploadDirectory = './temp_upload/';
console.log(fs.existsSync(uploadDirectory));
console.log(!fs.existsSync(uploadDirectory));

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
    }
});

export const upload = multer({ storage: storage });
