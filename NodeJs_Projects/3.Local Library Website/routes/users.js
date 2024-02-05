const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send('Users')
});

router.get("/cool", (req, res) => {
    res.send(`You're so cool`)
});

module.exports = router;