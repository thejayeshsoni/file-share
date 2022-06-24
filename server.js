const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db")

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
connectDB();

// CORS 
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(","),
}
app.use(cors());
const PORT = process.env.PORT || 5000;

//Template Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");


// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}...`);
});