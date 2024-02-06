const express = require('express');
const router = express.Router();


const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


router.get("/", (req, res) => {
    res.render("index", {
        messages
    })

});

router.get("/new", (req, res) => {
    res.render("form")
});

router.post("/new", (req, res) => {
    messages.push({
        user: req.body.author,
        text: req.body.text,
        added: new Date()
    });

    res.redirect('/');
})

module.exports = router;