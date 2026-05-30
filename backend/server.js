require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}.`);
    });
})
.catch(err => console.log("Error: ", err));

app.get('/', (req, res) => {
    res.send("Server is running !");
});

// Connect Route to Server
const urlRoutes = require('./urlRoutes');
app.use('/api/url', urlRoutes);

// Create Redirect Route
const { redirectUrl } = require('./urlController');
app.get('/:shortCode', redirectUrl);