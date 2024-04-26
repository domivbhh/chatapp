import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToDB from './db/connectToDB.js';



//middleware
const PORT=process.env.PORT || 5000;
const app=express()

dotenv.config()

app.use(express.json())//to parse the incoming request with json payloads (from req.body)
app.use('/api/auth',authRoutes)



app.get('/',(req,res)=>{
    //root route http://localhost:5000/
    res.send('Hello world')
})




app.listen(PORT,()=>{
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})