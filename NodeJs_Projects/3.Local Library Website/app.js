const express = require('express');
const app = express();

// Other Dependency
// const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


// Database
//mongodb://localhost:27017
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
// const mongoDB = "mongodb://localhost:27017/local_library";

mongoose.connect('mongodb://localhost:27017/local_library');


const firstAuthor = {
    first_name: 'Seigfred',
    family_name: 'Sayson',
    date_of_birth: new Date('September 1, 1980'),
    date_of_death: new Date('July 1, 2022')
};

const Author = require('./models/author');

Author.create(firstAuthor).then((err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Succes")
    }
});


// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { main } = require('ejs-layout');


// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route
app.use("/", indexRouter);
app.use("/users", usersRouter);




// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};


    res.status(err.status || 500);
    res.render("error");

});



app.listen(3000, () => {
    console.log("Running at port 3000")
}).on('error', (err) => {
    console.error(`Error due to ${err.message}`);
})
