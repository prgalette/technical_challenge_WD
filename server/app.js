var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var phonesRouter = require("./routes/phones");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: [process.env.REACT_APP_URI], // <== URL of our future React app
  })
);

// app.use(
//     cors()
//   );

app.use("/phones", phonesRouter);

module.exports = app;
