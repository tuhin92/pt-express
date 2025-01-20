"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parse json
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware
const log = (req, res, next) => {
    console.log(req.url, req.method, req.body, req.hostname);
    next();
};
app.get('/', log, (req, res) => {
    res.send('Server is running!');
});
app.post('/', log, (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Data received',
    });
});
exports.default = app;
