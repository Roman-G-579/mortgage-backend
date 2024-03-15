const mongoose = require('mongoose');

const Database = () => {
    mongoose.connect(process.env.URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('Error connecting to MongoDB');
            console.log(error);
        });
}

module.exports = Database;
