import mongoose from 'mongoose';

const connectDB = (url) => {
  try {
    mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
  } catch (error) {
    console.log(error)
  }
  
  
  
  
  
};

export default connectDB;