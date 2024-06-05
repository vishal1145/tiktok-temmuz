const express = require("express")
const router = express.Router()
const { upload, uploadExcel } = require("../middleware/media");
const XLSX = require('xlsx');
const fs = require('fs');

router.post("/image", upload, (req, res) => {
    let baseUrl = process.env.BASE_URL
    res.send({ msg: "File Uploaded", url: baseUrl + req.file.filename });
});

router.post("/upload-excel", (req, res) => {
    let baseUrl = process.env.BASE_URL
    // res.send({ msg: "File Uploaded", url: baseUrl + req.file.filename });

    uploadExcel(req, res, (err) => {
        if (err) {
            res.status(400).json({ message: err });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: 'No file selected!' });
            } else {
                const workbook = XLSX.readFile(req.file.path);
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet);

                // Optionally, you can delete the file after processing
                fs.unlinkSync(req.file.path);

                res.status(200).json({ message: 'File uploaded successfully', url: baseUrl + req.file.filename });
            }
        }
    });
});

module.exports = router