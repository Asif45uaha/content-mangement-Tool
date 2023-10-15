import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from './routes/route.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
dotenv.config()
const PORT = process.env.PORT_NO

app.listen(PORT, () => {
    console.log(`Server is listening at Port No: ${PORT}`);
})


//Connection With Database

const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected Success!");
    } catch (error) {
        console.log("Error Connecting the Db");
    }
}
Connection()

//routes
app.use("/", router)