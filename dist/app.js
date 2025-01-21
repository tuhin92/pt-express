"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/", log, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(hhjgjhg);
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(500).json({
        //   success: false,
        //   message: "Internal server error",
        // })
    }
}));
app.post("/", log, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Data received",
    });
});
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route is not found",
    });
});
//global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.default = app;
