import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postsRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use( postsRoutes);
app.use( userRoutes);
app.use(express.static("uploads"));


const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://nextup2027_db_user:XzilrE2EB7P5x6PL@nextup.o4hnvsh.mongodb.net/?appName=NextUp")

    app.listen(9090, () => {
        console.log("Server is running on port 9090")
    })
}
start();