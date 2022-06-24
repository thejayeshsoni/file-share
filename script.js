const File = require("./models/file");
const fs = require("fs");
const connectDB = require("./config/db");
connectDB();

async function fetchData() {
    const pastDate = new Date(Date.now() - (1000 * 60 * 60 * 24));
    const files = File.find({ createdAt: { $lt: pastDate } });
    if (files.length) {
        for (const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`Successfully Deleted... ${file.fileName}`);
            } catch (error) {
                console.log(`Error while deleting the file...${error}`);
            }
        }
        console.log(`Job done..!!`);
    }
}

fetchData().then(process.exit);