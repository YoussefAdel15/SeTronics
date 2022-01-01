const express = require("express");
const connectedDB = require("./config/db");
const URL =
    "mongodb+srv://YoussefAdel:Youssef1552001@fortest.akw1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const app = express();
const product = require("./models/Product");
const cors = require("cors");

//connect database
//connectedDB();

//init middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running..."));

//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/Products", require("./routes/api/Products"));

// This is simple example too fetch products data
app.post("/products", (req, res) => {
    console.log("get request");
    product
        .find({})
        .then((response) => {
            //console.log(res);
            res.send(response);
        })
        .catch((err) => {
            console.log(err);
        });
});

mongoose
    .connect(URL)
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
