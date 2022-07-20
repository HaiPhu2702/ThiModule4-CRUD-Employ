"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employ = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const employSchema = new mongoose_1.default.Schema({
    ma: Number,
    ten: String,
    tuoi: Number,
    luong: Number,
    phongban: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Branch" },
});
const Employ = mongoose_1.default.model('Employ', employSchema);
exports.Employ = Employ;
//# sourceMappingURL=employ.model.js.map