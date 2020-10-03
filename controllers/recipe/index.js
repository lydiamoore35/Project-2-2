//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const bcrypt = require("bcryptjs");
const Recipe = require("../../models/recipe");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//INDEX//
router.get("/", auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({username: req.session.username})
      console.log( await recipes) 
    res.render("../views/recipes/index.jsx", {recipes});
  } catch (error) {
    console.log(error)
  }
});
//NEW//
router.get("/new", auth, async (req, res) => {
  res.render("../views/recipes/new.jsx")
})
//DELETE//
router.delete("/:id", auth, async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.redirect("/recipe/");
})
//UPDATE//
router.put("/edit/:id", auth, async (req, res) => {
  req.body.username = req.session.username
  await Recipe.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/recipe/")
})
//CREATE//
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username
  const newRecipe = await Recipe.create(req.body)
  res.redirect("/recipe/")
})
//EDIT//
router.get("/edit/:id", auth, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  res.render("recipes/edit.jsx", {recipe}) 
})
//SHOW//
router.get("/show/:id", auth, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  res.render("recipes/show.jsx", {recipe}) 
})
//RECIPES SHOW//
router.get("/recipes/:id", auth, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  res.render("recipes/recipes.jsx", {recipe}) 
})

// SIGNUP PAGE
router.get("/signup", (req, res) => {
  res.render("auth/signup.jsx");
});

// CREATE NEW USER POST REQUEST
router.post("/signup", async (req, res) => {
  try{
  // ENCRYPT THE PASSWORD
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // SAVE NEW USER IN DB
  const newUser = await User.create(req.body);
  // Redirect to login page
  res.redirect("/auth/login");
} catch (error) {
  console.log(error);
}
});

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("auth/login.jsx");
});

// LOGIN POST REQUEST
router.post("/login", async (req, res) => {
  // FIND USER
  const user = await User.find({ username: req.body.username });

  //CHECK IF USER WAS FOUND
  if (user.length > 0) {
    // COMPARE PASSWORD
    const check = await bcrypt.compare(req.body.password, user[0].password);
    if (check) {
      //SAVE INFO IN SESSION THAT USER IS LOGGEDIN AND USERNAME
      req.session.login = true;
      req.session.username = user[0].username;
      res.redirect("/recipes/");
    } else {
      // Redirect to login page if failed
      res.render("auth/fail.jsx");
    }
  } else {
    // Redirect to login page if failed
    res.render("auth/fail.jsx");
  }
});

//LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
