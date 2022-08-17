"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employ_model_1 = require("../schemas/employ.model");
const branch_model_1 = require("../schemas/branch.model");
class EmployController {
    static async getListEmployAll(req, res) {
        const employ = await employ_model_1.Employ.find()
            .populate("phongban").sort("tuoi");
        return res.render("listEmploy", { employs: employ });
    }
    static getAdd(req, res) {
        res.render('createEmploy');
    }
    static async postAdd(req, res) {
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
        res.redirect("/");
    }
    static async deteteEmploy(req, res) {
        const employ = await employ_model_1.Employ.findOne({ _id: req.params.id }).populate('phongban');
        const phongban = await branch_model_1.Branch.findOne({ _id: employ.phongban });
        await phongban.remove();
        await employ.remove();
        res.redirect("/");
    }
    static async getUpdate(req, res) {
        const employ = await employ_model_1.Employ.findOne({ _id: req.params.id })
            .populate("phongban");
        res.render('updateEmploy', { employ: employ });
    }
    static async postUpdate(req, res) {
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
        res.redirect('/');
    }
    static async detailEmploy(req, res) {
        const employ = await employ_model_1.Employ.findOne({ _id: req.params.id })
            .populate("phongban");
        res.render('detailEmploy', { employ: employ });
    }
}
exports.default = EmployController;
//# sourceMappingURL=employ.controller.js.map