import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { bootstrap } from './src/index.router.js'
const app = express()
const PORT = 5000
app.use(cors())

bootstrap(app, express)


app.listen(PORT, () => {
    console.log(`Server is running on port ..... ${PORT}`);
})