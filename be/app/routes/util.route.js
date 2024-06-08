const express = require("express")
const router = express.Router()
const { upload } = require("../middleware/media");
const { uploadExcel } = require("../middleware/excel");
const XLSX = require('xlsx');
const fs = require('fs');
const ExcelModel = require("../models/excel.model");
const ExcelDataModel = require("../models/excel_data.model");

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
                const sheet_name_list = workbook.SheetNames;
                const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
                const columnsToKeep = ['Creator ID', 'Creator information', 'Diamonds this month', 'Percentage achieved', 'LIVE duration this month', 'Valid days this month']; // Replace with your column names
                const filteredData = xlData.map(row => {
                    let filteredRow = {};
                    columnsToKeep.forEach(column => {
                        if (row[column] !== undefined) {
                            filteredRow[column] = row[column];
                        }
                    });
                    return filteredRow;
                });

                const publisher = ExcelModel(body);
                await publisher.save();
                await ExcelDataModel.insertMany(filteredData);

                res.status(200).json({ success: true, msg: `${filteredData.length} documents were inserted` });
            }
        }
    });
});

module.exports = router