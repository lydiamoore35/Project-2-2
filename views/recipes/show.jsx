const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
  render() {
    const {recipes} = this.props
    return (
      <Layout title="My Recipes">
        <h1> Recipes </h1>
        <a href="/recipe/new"></a>
        {recipes.map((recipe) => {
          return (
            <div>
              <h3>{recipe.username}</h3>
              <h3>{recipe.category}</h3>
              <img src={`${recipe.img}`} alt="food" width="120"></img>
              <h3>{recipe.descirption}</h3>
              <h3>{recipe.time}</h3>
              <h3>{recipe.servings} servings</h3>

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

module.exports = Show;
