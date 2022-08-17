import express from "express";
const router=express.Router();

import EmployController from "../controller/employ.controller";

//Giao dien khi bắt đầu vào
router.get('/',EmployController.getListEmployAll);


//Giao dien khi an nut Add
router.get('/create',EmployController.getAdd)

//Trong giao dien add khi ấn nút add submit form post
router.post('/create',EmployController.postAdd)



// Khi an nut xóa nhan vien
router.get('/delete/:id',EmployController.deteteEmploy)



//giao dien khi an nut update
router.get('/update/:id', EmployController.getUpdate)

//trong giao dien update khi an submit form method post
router.post('/update', EmployController.postUpdate)


//khi an vao ten nhan vien hien thi chi tiet nhan vien
router.get('/detail/:id', EmployController.detailEmploy)







export default router;