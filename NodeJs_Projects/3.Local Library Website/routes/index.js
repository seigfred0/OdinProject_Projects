const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Express",
        body: "This is part of the odin project curriculum."
    })
  
});

module.exports = router;