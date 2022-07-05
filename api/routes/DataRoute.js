const express = require('express')
const router = express.Router()
const multer = require('multer')
const Auth = require('../controller/AuthController')
const User = require('../controller/UserController')
const auth = require('../middleware/auth')
const {v4: uuidv4} = require('uuid')
uuidv4();

const DIR = './public/'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            cb(null, true)
        }else{
            cb(null, false)
            return cb(new Error('Only .png .jpg .jpeg format allowed!'))
        }
    }
})


//Auth
router.post('/auth', Auth.PostAuth);

//User
router.post('/user', User.PostUser);
router.patch('/user/:_id',upload.single('avatar'), User.UpdateAvatar);
router.get('/user/me', auth , User.Me);

module.exports = router;