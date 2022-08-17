"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const employ_controller_1 = __importDefault(require("../controller/employ.controller"));
router.get('/', employ_controller_1.default.getListEmployAll);
router.get('/create', employ_controller_1.default.getAdd);
router.post('/create', employ_controller_1.default.postAdd);
router.get('/delete/:id', employ_controller_1.default.deteteEmploy);
router.get('/update/:id', employ_controller_1.default.getUpdate);
router.post('/update', employ_controller_1.default.postUpdate);
router.get('/detail/:id', employ_controller_1.default.detailEmploy);
exports.default = router;
//# sourceMappingURL=employ.router.js.map