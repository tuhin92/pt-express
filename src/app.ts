import express, {Request, Response} from 'express'
const app = express()
const port = 3000

//parse json
app.use(express.json());
app.use(express.text());

app.get('/', (req: Request , res: Response) => {
  res.send('Server is running!')
})

app.post('/', (req: Request , res: Response) => {
    console.log(req.body);
    res.send("dsahj");
})

export default app;