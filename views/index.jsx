const React = require("react");
const Layout = require("./layout.jsx");
// const recipeArr = require("../db/seed.js");

// const randomRecipe = () => {
//   return (
//     recipeArr[Math.floor(Math.random() * recipeArr.length)]
//   )
// }

class Index extends React.Component {
  render() {
    const {recipes} = this.props
    return (
      <Layout title="Create Your Cookbook">
        <a href="/recipe/recipes"></a>
            {recipes.map((recipe) => {
            return (
              <div className="displayRecipes">
                <h3>{recipe.recipe}</h3>
                <img src={`${recipe.img}`} alt="food" width="250"></img>
                <h4>{recipe.description}</h4>
                <h4>{recipe.time}</h4>
                <h4>{recipe.servings} servings</h4>
            </div>
          ) 
        })} 
      </Layout>
    )
  }
}

module.exports = Index;