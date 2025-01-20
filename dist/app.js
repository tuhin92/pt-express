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
//router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
//user routes
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
    });
});
//course routes
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course created successfully",
    });
});
//middleware
const log = (req, res, next) => {
    console.log(req.url, req.method, req.body, req.hostname);
    next();
};
app.get("/", log, (req, res) => {
    res.send("Server is running!");
});
app.post("/", log, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Data received",
    });
});
exports.default = app;
