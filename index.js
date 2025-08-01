const path = require("path");
const express = require("express");
const moongose = require("mongoose");

const userRoute = require('./routes/user');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8000;

moongose.connect('mongodb://localhost:27017/blog-write').then((e)=>console.log("Mongo DB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("home")
});

app.use("/user",userRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));