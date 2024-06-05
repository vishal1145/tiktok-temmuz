const multer = require('multer')
const path = require('path')

exports.upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadPath = path.join(__dirname, '../uploads');
            cb(null, uploadPath) 
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
}).single("image");

exports.uploadExcel = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadPath = path.join(__dirname, '../excels');
            cb(null, uploadPath) 
        },
        filename: function (req, file, cb) {
            const now = new Date();
            const timestamp = now.toISOString().replace(/[-T:.Z]/g, '');
            cb(null, timestamp + '-' + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single("excel");

function checkFileType(file, cb) {
    const filetypes = /xlsx|xls/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
    ];
    const mimetype = mimetypes.includes(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Excel Files Only!');
    }
}

