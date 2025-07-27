import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { bootstrap } from './src/index.router.js'
const app = express()
app.use(cors())

bootstrap(app, express)


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ..... ${process.env.PORT}`);
})