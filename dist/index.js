"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const employ_router_1 = __importDefault(require("./src/router/employ.router"));
const port = 8080;
mongoose_1.default.connect('mongodb+srv://root:Password@thimodule4.ecvui3h.mongodb.net/DataThiModule4_1103?retryWrites=true&w=majority').then(() => {
    console.log("connect DB success");
}).catch((err) => { throw err; });
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', employ_router_1.default);
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map