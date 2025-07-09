// routes/static.js
const express = require('express');
const path    = require('path');
const router  = express.Router();

// serve /public at the web root:
router.use(express.static(path.join(__dirname, '../public')));

module.exports = router;


