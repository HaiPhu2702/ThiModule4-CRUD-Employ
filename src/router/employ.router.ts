import express from "express";
import {Employ} from "../schemas/employ.model";
import {Branch} from "../schemas/branch.model";
const router=express.Router();



router.get('/create',(req, res) => {
    res.render('createEmploy')
})

router.post('/create',async (req, res) => {
     const newBranch = new Branch({
            ten: req.body.phongban
        })
    await newBranch.save();
        const newEmploy = new Employ({
            ma: req.body.ma,
            ten: req.body.ten,
            tuoi: req.body.tuoi,
            luong: req.body.luong,
            phongban:newBranch

        })
    await newEmploy.save();
        res.redirect("/employ/list")
})

router.get('/delete/:id',async (req, res) => {
        const employ = await Employ.findOne({_id: req.params.id}).populate('phongban');
        const phongban=await Branch.findOne({_id:employ.phongban._id})
        await phongban.remove()
        await employ.remove();
        res.redirect("/employ/list")
})
router.get('/update/:id', async (req, res) => {
        const employ = await Employ.findOne({_id: req.params.id})
            .populate("phongban")
            res.render('updateEmploy', {employ: employ})

})

router.post('/update', async (req, res) => {
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
    res.redirect('/employ/list')

})


router.get('/list',async (req, res)=>{
    const employ = await Employ.find()
        .populate("phongban").sort("tuoi")
    res.render("listEmploy", {employs: employ});
})




export default router;