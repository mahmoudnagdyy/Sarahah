import mongoose from 'mongoose'


const connectDB = async () => {
    return await mongoose.connect(process.env.ATLAS_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.log('Fail to connectDB',err);
    })
}


export default connectDB