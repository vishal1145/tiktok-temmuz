const express = require("express")
const router = express.Router()
const { upload, uploadExcel } = require("../middleware/media");
const XLSX = require('xlsx');
const fs = require('fs');
const ExcelModel = require("../models/excel.model");

router.post("/image", upload, (req, res) => {
    let baseUrl = process.env.BASE_URL
    res.send({ msg: "File Uploaded", url: baseUrl + req.file.filename });
});

router.post("/upload-excel", async(req, res) => {
    let baseUrl = process.env.BASE_URL
    // res.send({ msg: "File Uploaded", url: baseUrl + req.file.filename });

    uploadExcel(req, res, async(err) => {
        if (err) {
            res.status(400).json({ message: err });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: 'No file selected!' });
            } else {
                const body = {
                    date: req.body.date,
                    excel_url: baseUrl + req.file.filename
                }

                const workbook = XLSX.readFile(req.file.path);
                
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const publisher = ExcelModel(body);
                const created   = await publisher.save();
                fs.unlinkSync(req.file.path);

                res.status(200).json({ message: 'File uploaded successfully' });
            }
        }
    });
});

module.exports = router