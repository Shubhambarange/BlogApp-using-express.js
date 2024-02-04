const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(express.json())

const blogRoutes = require('./routes/blog')
app.use("/api/v1", blogRoutes);

app.listen(PORT, () => {
    console.log(`Server stared at Port number ${PORT}`)
})

const dbConnect = require("./config/database")
dbConnect()

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is HomePage buddy</h1>`);
});