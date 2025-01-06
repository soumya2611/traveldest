import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import destinationRouter from './routes/destinationRoute.js';
import userRouter from './routes/userRoute.js';
//app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary() 
//middlewares 
app.use(express.json())
app.use(cors())

//API ENDPOINTs
app.get('/', (req, res) => {
    res.send("welcome to travel dest api ❤️")
})

app.use('/api/destination', destinationRouter)
app.use('/api/user',userRouter)


app.listen(port, () => {
    console.log('server started::'+port)
})