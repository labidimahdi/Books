import  express, { request, response }  from "express";  
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book }from './Models/BookModels.js'
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'
const app=express();

app.use(express.json());
app.use(cors());



app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome to Travel web project')
});
app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`app is listening to port : ${PORT}`);
        });
    })
    .catch((error) =>{
    console.log(error);

    });