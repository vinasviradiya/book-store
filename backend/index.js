import express, { request, response } from 'express';
import { PORT,mongoURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
//middleware
app.use(express.json());
//cors polycy
app.use(cors())
//option2 allow custom origin
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         method:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );
app.get("/",(req,res) =>{
    console.log(request);
    return response.status(234).send('welcome to mern stack')
});


app.use('/books',booksRoute);


mongoose.connect(mongoURL)
.then(()=>{
console.log("App connected to database")
app.listen(PORT,()=>{
    console.log(`App is running to port : ${PORT}`);

})
})
.catch((error)=>{
    console.log(error);
})
