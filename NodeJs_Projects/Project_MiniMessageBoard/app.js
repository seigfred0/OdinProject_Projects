const express =  require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');


// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



// Routes
app.use("/", indexRouter);







app.listen(3000, () => {
    console.log('Server Running')
})