///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const recipeSchema = new Schema ({
  username: {type: String, required: true},
  recipe: {type: String},
  category: {type: String, required: true},
  img:{type: String},
  description: {type: String},
  time: {type: String},
  servings: {type: String}
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const Recipe = model("recipe", recipeSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = Recipe;
