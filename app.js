var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postRouter = require("./routes/post_message");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  //res.setHeader("Access-Control-Allow-Origin", "https://fiddle.jshell.net");
  //res.setHeader("Access-Control-Allow-Origin", "https://forms-eu1.hsforms.com");

  //res.setHeader("Access-Control-Allow-Origin","https://landing.mediainterface.de");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", indexRouter);
app.use("/users/register/trial", usersRouter);
app.use("/post_msg", postRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
