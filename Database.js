const mongoose = require('mongoose');
const uri = "mongodb+srv://Roman:Aa123456@cluster0.zxm7p9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



const Database = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('Error connecting to MongoDB');
            console.log(error);
        });
}

module.exports = Database;
