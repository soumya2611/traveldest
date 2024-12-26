import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import destinationRouter from './routes/destinationRoute.js';
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
    res.send("api working")
})

app.use('/api/destination',destinationRouter)


app.listen(port, () => {
    console.log('server started::'+port)
})