import express, {NextFunction, Request, Response} from 'express'
const app = express()
const port = 3000

//parse json
app.use(express.json());
app.use(express.text());


//middleware
const log = (req : Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.body, req.hostname);
    next();
}

app.get('/', log, (req: Request , res: Response) => {
    res.send('Server is running!')
})

app.post('/', log, (req: Request , res: Response) => {
    console.log(req.body);
    res.json({
        message: 'Data received',
    })
})

export default app;