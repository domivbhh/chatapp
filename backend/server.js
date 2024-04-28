import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {app,server} from './socket/socket.js';


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToDB from './db/connectToDB.js';



//middleware
const PORT=process.env.PORT || 5000;
app.use(cookieParser())

dotenv.config()

app.use(express.json())//to parse the incoming request with json payloads (from req.body)
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)




app.get('/',(req,res)=>{
    //root route http://localhost:5000/
    res.send('Hello world')
})




server.listen(PORT,()=>{
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})