//In JavaScript and Node.js, exports is a built-in mechanism that lets you share code between different files.

const shortid = require('shortid');
const Url = require('./urlModel');

exports.shortenUrl = async (req, res) => {
    try
    {
        res.send("Shorten URL Route is working !");
    }
    catch(error)
    {
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// Extract URL from Request, generate its Short code and save it in MongoDB.
exports.shortenUrl = async (req, res) => {
    try
    {
        const {originalUrl} = req.body;
        console.log(originalUrl);

         new URL(originalUrl);  // checks if URL is vaild or not.

        // Generate Short Code
        const shortCode = shortid.generate();
        console.log(shortCode);

        // Create Database Document
        const newUrl = new Url({
                originalUrl,
                shortCode
            });

        // Save to MongoDB
        await newUrl.save();

        // Send Response
        res.json({
            shortUrl: `http://localhost:${process.env.PORT}/${shortCode}`
        });
    }
    catch(error)
    {
        console.log(error);

        res.status(400).json({
            message: "Invalid URL"
        });
    }
};

// Create Redirect Controller
exports.redirectUrl = async (req, res) => {
    try
    {
        const { shortCode } = req.params;
        const url = await Url.findOne({
            shortCode
        });

        if(existingUrl)
        {
            return res.json({
                shortUrl: `http://localhost:${process.env.PORT}/${existingUrl.shortCode}`
            });
        }

        if(url)
            return res.redirect(url.originalUrl);
        else
        {
            return res.status(404).json({
                message: "URL not found"
            });
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};