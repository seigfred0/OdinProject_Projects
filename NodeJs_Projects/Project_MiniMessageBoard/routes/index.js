const express = require('express');
const router = express.Router();


// const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleDateString('en-US', {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric'
//     });

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: formattedDate
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: formattedDate
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
        added: formattedDate
    });

    res.redirect('/');
})

module.exports = router;