import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'



// configuration dotenv
dotenv.config()

connectDB()

// rest object
const app = express()


// middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes);

// rest api
app.get('/', (req, res) => {
    // res.send({
    //     message: "Welcome to Home app",

    // })
    res.send("<h1>Welcome to Ecommerce App</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server is running on the  ${process.env.DEV_MODE} in port number ${PORT}`.bgCyan.white)
})