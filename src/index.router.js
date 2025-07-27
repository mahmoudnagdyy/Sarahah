import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import messageRouter from './modules/message/message.router.js'
import userRouter from './modules/user/user.router.js'
import { globalErrorHandler } from './utils/errorHandler.js'



export const bootstrap = (app, express) => {

    app.use(express.json())

    app.get('/', (req, res, next) => {
        return res.send('<h1>Hello from Sarahah App</h1>')
    })

    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/message', messageRouter)
    
    app.use(globalErrorHandler)

    app.use('*root', (req, res, next) => {
        return res.send({message: '404 Page Not Found'})
    })
    
    connectDB()

}