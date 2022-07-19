const express = require('express')
const router = express.Router()
const multer = require('multer')
const Auth = require('../controller/AuthController')
const User = require('../controller/UserController')
const Data = require('../controller/DataUserCtl')
const auth = require('../middleware/auth')
const {v4: uuidv4} = require('uuid')
uuidv4();

const DIR = './public/';
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


//Auth
router.post('/auth', Auth.PostAuth);

//User
router.post('/user', User.PostUser);
router.get('/user/me', auth , User.Me);

//Data User

router.get('/data', Data.GetData);
router.get('/data/:_id', Data.GetDataById);
router.post('/data', upload.single('avatar'), Data.CreateData);
router.patch('/data/:_id', upload.single('avatar'), Data.UpdateData);
router.delete('/data/:_id', Data.DeleteData);
module.exports = router;