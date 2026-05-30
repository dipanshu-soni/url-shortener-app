const express = require('express');
const router = express.Router();
const {shortenUrl} = require('./urlController');
router.post('/shorten', shortenUrl);
module.exports = router;