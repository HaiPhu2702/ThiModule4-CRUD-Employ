import {Employ} from "../schemas/employ.model";
import {Branch} from "../schemas/branch.model";

class EmployController {

    static async getListEmployAll(req: any, res: any) {
        const employ = await Employ.find()
            .populate("phongban").sort("tuoi")
        return res.render("listEmploy", {employs: employ});
    }


    static getAdd(req: any, res: any) {
        res.render('createEmploy')
    }


    static async postAdd(req: any, res: any) {
        const newBranch = new Branch({
            ten: req.body.phongban
        })
        await newBranch.save();
        const newEmploy = new Employ({
            ma: req.body.ma,
            ten: req.body.ten,
            tuoi: req.body.tuoi,
            luong: req.body.luong,
            phongban: newBranch
        })
        await newEmploy.save();
        res.redirect("/")
    }

    static async deteteEmploy(req: any, res: any) {
        const employ = await Employ.findOne({_id: req.params.id}).populate('phongban');
        const phongban = await Branch.findOne({_id: employ.phongban})
        await phongban.remove()
        await employ.remove();
        res.redirect("/")
    }

    static async getUpdate(req: any, res: any) {
        const employ = await Employ.findOne({_id: req.params.id})
            .populate("phongban")
        res.render('updateEmploy', {employ: employ})
    }

    static async postUpdate(req: any, res: any) {
        //cap nhat collection Book
        const employUpdate = await Employ.findOne({_id: req.body.idUpdate}).populate('phongban');
        employUpdate.ma = req.body.ma;
        employUpdate.ten = req.body.ten;
        employUpdate.tuoi = req.body.tuoi;
        employUpdate.luong = req.body.luong;
        employUpdate.luong = req.body.luong;
        await employUpdate.save();


        const phongban = await Branch.findOne({_id: employUpdate.phongban._id})
        phongban.ten = req.body.phongban
        await phongban.save();
        res.redirect('/')
    }

    static async detailEmploy(req: any, res: any) {
        const employ = await Employ.findOne({_id: req.params.id})
            .populate("phongban")
        res.render('detailEmploy', {employ: employ})
    }


}

export default EmployController;