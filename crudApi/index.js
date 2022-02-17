import express from 'express';
import bodyParser from 'body-parser';
import userRoutes  from './routers/user.js'
import studentRoutes  from './routers/student.js'
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());


app.use('/user',userRoutes);
app.use('/student', studentRoutes);
app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(PORT,()=>{ console.log(`server running at http://localhost:${PORT}`)});