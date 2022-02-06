const express = require('express')
const app = express()
const connectDB = require('./db');
const blogRoutes = require("./routes/blog.routes")
const authRoutes = require("./routes/auth.routes")
const cors = require('cors');
const path = require('path')
require('dotenv').config();


app.use(express.json());
app.use(cors())
const port = process.env.PORT||5000;
connectDB();
if (process.env.NODE_ENV === "production") {
    // set a static folder
    app.use(express.static("client/build"));

    // Provide a wildcard as a fallback for all routes
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../client", "build", "index.html")
        );
    });
}
app.use('/api/blog',blogRoutes);
app.use('/api/auth',authRoutes);
app.get('/', (req, res) => res.send('Backend API Running!'))
app.listen(port, () => console.log(`Backend listening on port ${port}!`))