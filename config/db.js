require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(console.log('Database connected 🥳🥳🥳🥳'))
        .catch((error) => {
            console.log("Database connection Failed...");
            process.exit(1);
        });
}

module.exports = connectDB;