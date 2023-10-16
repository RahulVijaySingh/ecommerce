import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB DataBase ${conn.connection.host}.`.bgRed)
    } catch (error) {
        console.log(`Error in MongoDb Connection ${error}`)
    }
}


export default connectDB;