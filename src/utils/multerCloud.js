import {v2 as cloudinary} from 'cloudinary'
import multer from 'multer'

export const allowedExtensions = {
    image: ['image/jpg', 'image/jpeg', 'image/png'],
    video: ['video/mp4'],
    audio: ['audio/mp3'],
    file: ['application/pdf']
}

cloudinary.config({
    cloud_name: 'ddbxrwwmz',
    api_key: '797827295144815',
    api_secret: 'AatKcubDyFThFk_I_lIixiIF81s'
})

const multerCloud = (fileType) => {
    const storage = multer.diskStorage({})
    const fileFilter = (req, file, cb) => {
        if(fileType.includes(file.mimetype)){
            return cb(null, true)
        }
        cb(new Error('In-valid file type'), false)
    }

    const upload = multer({ storage, fileFilter })
    return upload
}


export {
    cloudinary,
    multerCloud
}