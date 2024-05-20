const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan')
const { pageNotFound,errorMiddleware } = require('./middleware/error');
const connectToMongoDB = require('./config/database.config');

const userRouter= require('./router/user.router')
const movieRouter= require('./router/movie.router')
const categoryRouter= require('./router/category.router');
const uploadRouter= require('./router/upload.router');
const app = express();

const PORT = process.env.PORT || 8000;
connectToMongoDB(app,PORT);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(morgan('dev'))
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true 
  };
  
  app.use(cors(corsOptions));
app.use('/api/user',userRouter)
app.use('/api/movie',movieRouter)
app.use('/api/category',categoryRouter)
app.use('/api/upload',uploadRouter)
app.use("*",pageNotFound)
app.use(errorMiddleware)
