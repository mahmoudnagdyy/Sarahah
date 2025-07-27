import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { bootstrap } from './src/index.router.js'
import { deleteUnconfirmedUsers, deleteUserlessMessage } from './src/utils/cronjob.js'
const app = express()
app.use(cors())

bootstrap(app, express)

deleteUnconfirmedUsers()
deleteUserlessMessage()


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ..... ${process.env.PORT}`);
})