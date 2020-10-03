///////////////////////////
// Environmental Variables
///////////////////////////
// REMEMBER TO CREATE .env file
require("dotenv").config();
const { PORT, SECRET } = process.env;

///////////////////////////
// Dependencies
//////////////////////////

// Bringing in Express
const express = require("express");
const app = express();
const Recipe = require("./models/recipe");

// IMPORT DATABASE CONNECTIONS
const mongoose = require("./db/dbconn");

// ROUTERS
const authRouter = require("./controllers/auth");
// const testRouter = require("./controllers/test");
const recipeRouter = require("./controllers/recipe");

// OTHER IMPORTS
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const morgan = require("morgan");

///////////////////////////////
// Set View Engine
///////////////////////////////

//set view engine to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

////////////
//MIDDLEWARE
////////////
// SESSIONS, this allows you to use req.session for tracking session data
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
    store: new MongoStore({mongooseConnection: mongoose.connection}),
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //comment if not using forms
app.use(methodOverride("_method"));
// app.use(express.json()) uncomment if using json
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////
app.get("/", (req, res) => {
  Recipe.find({}, (error, recipes) => {
  res.render("index.jsx", {recipes});
});
});

app.use("/auth", authRouter);
// app.use("/test", testRouter);
app.use("/recipe", recipeRouter);

////////////////////////
//APP LISTENER
////////////////////////
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});