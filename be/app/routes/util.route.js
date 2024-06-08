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

router.post("/upload-excel", async (req, res) => {
    let baseUrl = process.env.BASE_URL
    // res.send({ msg: "File Uploaded", url: baseUrl + req.file.filename });

    uploadExcel(req, res, async (err) => {
        if (err) {
            res.status(400).json({ message: err });
        } else {
            if (req.file == undefined) {
                res.status(400).json({ message: 'No file selected!' });
            } else {
                try {
                    const body = {
                        date: new Date(req.body.date),
                        excel_url: baseUrl + req.file.filename
                    };
        
                    const workbook = XLSX.readFile(req.file.path);
                    const sheet_name_list = workbook.SheetNames;
                    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
                    const columnsToKeep = ['Creator ID', 'Creator information', 'Diamonds this month', 'Percentage achieved', 'LIVE duration this month', 'Valid days this month'];
        
                    const filteredData = xlData.map(row => {
                        const filteredRow = {};
                        columnsToKeep.forEach(column => {
                            if (row[column] !== undefined) {
                                if (column === "Creator ID") {
                                    filteredRow.creator_id = row[column];
                                } else if (column === "Creator information") {
                                    filteredRow.creator_inf = row[column];
                                } else if (column === "Diamonds this month") {
                                    filteredRow.diamonds_this_month = row[column];
                                } else if (column === "Percentage achieved") {
                                    filteredRow.percentage_achieved = row[column];
                                } else if (column === "LIVE duration this month") {
                                    filteredRow.live_duration_this_month = row[column];
                                } else if (column === "Valid days this month") {
                                    filteredRow.valid_days_this_month = row[column];
                                }
                            }
                        });
                        filteredRow.as_of_date = body.date;
                        return filteredRow;
                    });
        
                    await ExcelDataModel.deleteMany({ as_of_date: body.date });
        
                    const publisher = new ExcelModel(body);
                    await publisher.save();
        
                    await ExcelDataModel.insertMany(filteredData);
        
        
                    res.status(200).json({ success: true, msg: `${filteredData.length} documents were inserted` });
                } catch (error) {
                    res.status(500).json({ success: false, msg: error.message });
                }
                
            }
        }
    });
});

module.exports = router