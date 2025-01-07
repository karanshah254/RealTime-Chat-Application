import moogose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        const mongo_connection = await moogose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${mongo_connection.connection.host}`)
    }
    catch (error) {
        console.log(`Connection Error: ${error.message}`)
    }
}