import mongoose from 'mongoose';

const db = mongoose.connect("mongodb://localhost:27017/Gym")
.then(()=>{
    console.log("connected database server")
}).catch(err => console.log(err));

export default db