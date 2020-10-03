const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {recipes} = this.props
    return (
      <Layout title="My Recipes">
        <h3 className="myRecipes"> My Recipes </h3>
        <a href="/recipe/new">
          <button>New Recipe</button></a>
        {recipes.map((recipe) => {
          return (
            <div className="displayRecipes">
              <h3>{recipe.recipe}</h3>
              <img src={`${recipe.img}`} alt="food" width="250"></img>
              <h4>{recipe.description}</h4>
              <h4>{recipe.time}</h4>
              <h4>{recipe.servings} servings</h4>

              <form action={`/recipe/${recipe._id}?_method=DELETE`} method="POST">
                <input type="submit" value="delete"/>
              </form>

              <form action={`/recipe/edit/${recipe._id}`} method="GET">
                <input type="submit" value="edit"/>
              </form>
            </div>
          ) 
        })} 
      </Layout>
    );
  }
}

module.exports = Index;
