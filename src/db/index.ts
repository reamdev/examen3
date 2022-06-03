import mongoose from 'mongoose'

export let dbConnection: typeof mongoose = mongoose

const connectDB = async () => {
  try {
    const url = `mongodb+srv://dev:dev@twittor.5lwr5.mongodb.net/examen3?retryWrites=true&w=majority`
    dbConnection = await mongoose.connect(url)
  } catch (error) {
    console.error('DB connection Error', error);
  }
}

export default connectDB;
