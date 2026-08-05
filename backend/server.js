require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6975;

const connectDB = require("./config/db");
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
};

startServer();

// Test Route
app.get('/', (req, res) => {
    res.send("Server is running !");
});

// Connect Route to Server
const urlRoutes = require('./routes/urlRoutes');
app.use('/api/url', urlRoutes);

// Create Redirect Route
const { redirectUrl } = require('./controllers/urlController');
app.get('/:shortCode', redirectUrl);