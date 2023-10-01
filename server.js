
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';
import connectDB from './config/db.js';
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// esmodule fix
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"./client/build")));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category",categoryRoutes)
app.use('/api/v1/product',productRoutes)


// rest api
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,'C:/Users/HP/Downloads/myfirst-dynamic-website-main/myfirst-dynamic-website-main/client/build/index.html'));
})





const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});