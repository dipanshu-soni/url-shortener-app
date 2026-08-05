const shortid = require('shortid');
const Url = require('../models/urlModel');

exports.shortenUrl = async (req, res) => {
    try
    {
        res.json({
            success: true,
            message: "Shorten URL Route is working !"
        });
    }
    catch(error)
    {
        console.log("TestFailError: ", error);
        res.status(500).json({
            success: false,
            message: "Server Error !",
            error: error.message
        });
    }
};

// Extract URL from Request, generate its Short code and save it in MongoDB.
exports.shortenUrl = async (req, res) => {
    try
    {
        const {originalUrl} = req.body;
        console.log("Original URL: ", originalUrl);

        if(!originalUrl)
        {
            return res.status(400).json({
                success: false,
                message: "This field is required !"
            });
        }

        // check if URL is vaild or not.
        const validateUrl = new URL(originalUrl);

        // Generate Short Code
        const shortCode = shortid.generate();
        console.log("Short Code: ", shortCode);

        // Create Database Document
        const newUrl = new Url({
                originalUrl,
                shortCode
            });

        // Save to MongoDB
        await newUrl.save();

        // Send Response
        res.json({
            success: true,
            message: "Short URL generated.",
            shortUrl: `http://localhost:${process.env.PORT}/${shortCode}`
        });
    }
    catch(error)
    {
        console.log("ShortCodeGenerateError: ", error);
        res.status(500).json({
            success: false,
            message: "Server Error !",
            error: error.message
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

        if(url)
            return res.redirect(url.originalUrl);
        else
        {
            return res.status(404).json({
                success: false,
                message: "URL not found !"
            });
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error !"
        });
    }
};