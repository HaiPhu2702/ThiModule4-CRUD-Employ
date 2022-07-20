"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const branchSchema = new mongoose_1.default.Schema({
    ten: String,
});
const Branch = mongoose_1.default.model('Branch', branchSchema);
exports.Branch = Branch;
//# sourceMappingURL=branch.model.js.map