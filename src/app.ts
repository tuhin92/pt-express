import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parse json
app.use(express.json());
app.use(express.text());

//router
const userRouter = express.Router();
const courseRouter = express.Router();


app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

//user routes
userRouter.post("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
    })
});

//course routes
courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course created successfully",
    })
});

//middleware
const log = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.body, req.hostname);
  next();
};

app.get("/", log, async(req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(hhjgjhg);
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).json({
    //   success: false,
    //   message: "Internal server error",
    // })
  }
});

app.post("/", log, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Data received",
  });
});


app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route is not found",
  })
});


//global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error) {
    res.status(500).json({
      success: false,,
      message: "Internal server error",
    });
  }
});

export default app;
