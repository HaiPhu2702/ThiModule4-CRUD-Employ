"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employ_model_1 = require("../schemas/employ.model");
const branch_model_1 = require("../schemas/branch.model");
const router = express_1.default.Router();
router.get('/create', (req, res) => {
    res.render('createEmploy');
});
router.post('/create', async (req, res) => {
    const newBranch = new branch_model_1.Branch({
        ten: req.body.phongban
    });
    await newBranch.save();
    const newEmploy = new employ_model_1.Employ({
        ma: req.body.ma,
        ten: req.body.ten,
        tuoi: req.body.tuoi,
        luong: req.body.luong,
        phongban: newBranch
    });
    await newEmploy.save();
    res.redirect("/employ/list");
});
router.get('/delete/:id', async (req, res) => {
    const employ = await employ_model_1.Employ.findOne({ _id: req.params.id }).populate('phongban');
    const phongban = await branch_model_1.Branch.findOne({ _id: employ.phongban._id });
    await phongban.remove();
    await employ.remove();
    res.redirect("/employ/list");
});
router.get('/update/:id', async (req, res) => {
    const employ = await employ_model_1.Employ.findOne({ _id: req.params.id })
        .populate("phongban");
    res.render('updateEmploy', { employ: employ });
});
router.post('/update', async (req, res) => {
    const employUpdate = await employ_model_1.Employ.findOne({ _id: req.body.idUpdate }).populate('phongban');
    employUpdate.ma = req.body.ma;
    employUpdate.ten = req.body.ten;
    employUpdate.tuoi = req.body.tuoi;
    employUpdate.luong = req.body.luong;
    employUpdate.luong = req.body.luong;
    await employUpdate.save();
    const phongban = await branch_model_1.Branch.findOne({ _id: employUpdate.phongban._id });
    phongban.ten = req.body.phongban;
    await phongban.save();
    res.redirect('/employ/list');
});
router.get('/list', async (req, res) => {
    const employ = await employ_model_1.Employ.find()
        .populate("phongban").sort("tuoi");
    res.render("listEmploy", { employs: employ });
});
exports.default = router;
//# sourceMappingURL=employ.router.js.map