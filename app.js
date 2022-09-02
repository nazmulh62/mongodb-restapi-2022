const express = require("express");
const cors = require("cors");
require("./config/db");


const userRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);


// api/users: GET
// api/users/:id: GET
// api/users/: POST
// api/users/:id: PATCH
// api/users/id: DELETE


app.get("/", (req,res) => {
 res.sendFile(__dirname + "/./views/index.html");
});

// Route Not Found Error Handle
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found",
    });
});

// Server Error Handle
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something Went Goes Wrong",
    });
});



module.exports = app;