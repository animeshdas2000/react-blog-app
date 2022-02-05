const express = require('express')
const app = express()
const connectDB = require('./db');
const blogRoutes = require("./routes/blog.routes")
const authRoutes = require("./routes/auth.routes")
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors)
const port = process.env.PORT||5000;
connectDB();
app.use('/api/blog',blogRoutes);
app.use('/api/auth',authRoutes);
app.get('/', (req, res) => res.send('Backend API Running!'))
app.listen(port, () => console.log(`Backend listening on port ${port}!`))