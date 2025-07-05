import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN || '*'
}));
app.use(express.json({limit:'20kb'}));
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(cookieParser());

// import Routes
import userRoutes from '../routes/user.routes.js';
import blogRoutes from '../routes/blog.routes.js'
// routes
app.use("/api/users",userRoutes);
app.use("/api/blog",blogRoutes);


export { app }