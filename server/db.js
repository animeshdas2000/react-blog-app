const mongoose = require('mongoose');


async function connectDB(){
    try {
        await mongoose.connect(
            process.env.MONGO_DB_URI,{
                useNewUrlParser: true
            }
        );
        console.log('DB Connected');
    } catch (err) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports=connectDB;