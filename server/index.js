
import express from 'express'
import  Mongoose  from 'mongoose'
import cors from 'cors'
import dotenv from'dotenv'

import memoryRouter from './routers/memoryRouters.js'

dotenv.config()

const app = express()

app.use('/memories',memoryRouter)

app.listen(process.env.PORT, () => {
    Mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser: true,
       useFindAndModify:true,
       useFindAndModify:true, 
    }).then(() => console.log('connected to db')).catch((err)=> console.log(err))
})